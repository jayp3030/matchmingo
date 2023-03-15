const express = require("express");
const userAuth = require("../model/userAuth.model");
const Token = require("../model/token.model");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const crypto = require("crypto");
var nodemailer = require("nodemailer");

const privateKey = process.env.PRIVATE_KEY;
const clientURL = "https://matchmingo.netlify.app/";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// function to create a user
async function createUser(req, res) {
  let success = false;
  // if there are errors return bad request and errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // check whether the user with this email exist already
  const { email, password } = req.body;
  let user = await userAuth.findOne({ email: email });
  if (user) {
    return res
      .status(409)
      .json({ error: "sorry user with same email already exist" });
  }

  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);

  user = await userAuth.create({
    email: email,
    password: secPass,
  });
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, privateKey);
  success = true;
  res.status(201).json({ success, token });
}

// function to login user
async function loginUser(req, res) {
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await userAuth.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "please enter valid credentials" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ error: "please enter valid credentials" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, privateKey);
    success = true;
    res.json({ success, token });
  } catch (error) {
    res.status(500).send("internal server error");
  }
}

// function to reset password
const requestPasswordReset = async (req, res) => {
  const { email } = req.body;
  const user = await userAuth.findOne({ email });

  if (!user) throw new Error("User does not exist");
  let token = await Token.findOne({ userId: user._id });
  if (token) await token.deleteOne();
  let resetToken = crypto.randomBytes(32).toString("hex");
  const hash = await bcrypt.hash(resetToken, Number(10));

  await new Token({
    userId: user._id,
    token: hash,
    createdAt: Date.now(),
  }).save();

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  var mailOptions = {
    from: "matchmingo@gmail.com",
    to: email,
    subject: "Sending Email using Node.js",
    text: `Reset your password at :${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(400);
    } else {
      console.log("done");
      return res.status(200);
    }
  });
};

const resetPassword = async (req, res) => {
  const { userId, token, password } = req.body;
  let passwordResetToken = await Token.findOne({ userId });
  if (!passwordResetToken) {
    return res
      .status(400)
      .json({ success: false, err: "Invalid or expired password reset token" });
  }
  const isValid = await bcrypt.compare(token, passwordResetToken.token);
  if (!isValid) {
    return res
      .status(400)
      .json({ success: false, err: "Invalid or expired password reset token" });
  }
  const hash = await bcrypt.hash(password, Number(10));
  await userAuth.updateOne(
    { _id: userId },
    { $set: { password: hash } },
    { new: true }
  );
  const user = await userAuth.findById({ _id: userId });
  var mailOptions = {
    from: "matchmingo@gmail.com",
    to: user.email,
    subject: "Password Updated successfully",
    text: `Your password has been updated`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200);
    }
  });
  await passwordResetToken.deleteOne();
  return res.status(200).json({ success: true });
};

module.exports = { createUser, loginUser, requestPasswordReset, resetPassword };
