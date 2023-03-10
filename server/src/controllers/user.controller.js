const express = require("express");
const userAuth = require("../model/userAuth.model");
const usersInfo = require("../model/user.model");
const { ObjectId } = require("mongodb");

async function saveUserDetails(req, res) {
  const {
    userId,
    first_name,
    last_name,
    birth_date,
    gender,
    sexual_orientation,
    college,
    branch,
    passout_year,
    hometown,
    hobbies,
    bio,
  } = req.body;
  let user = await userAuth.findOne({ _id: userId });
  if (!user) {
    return res.status(400).json("not found");
  }

  const updatedUser = await usersInfo.findOneAndUpdate(
    { userId: userId },
    {
      userId: userId,
      first_name: first_name,
      last_name: last_name,
      birth_date: birth_date,
      gender: gender,
      sexual_orientation: sexual_orientation,
      college: college,
      branch: branch,
      passout_year: passout_year,
      hometown: hometown,
      hobbies: hobbies,
      bio: bio,
    },
    {
      upsert: true,
    }
  );
  res.status(204).json({ success: true });
}

// function to get logged in UserDetail

async function getUserDetails(req, res) {
  try {
    const userId = req.user.id;
    const userDetail = await usersInfo.findOne({
      userId: userId,
    });
    // new ObjectId("64081131706a79d1d6d8ad8c")
    res.status(200).json(userDetail);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("internal server error");
  }
}

// function to getUser
async function getUser(req, res) {
  try {
    const userId = req.params.id;
    const userDetail = await usersInfo.findOne({ userId: userId });
    // console.log(userDetail)
    res.status(200).json(userDetail);
  } catch (error) {
    res.status(500).json("internal server error");
  }
}

module.exports = {
  saveUserDetails,
  getUserDetails,
  getUser,
};
