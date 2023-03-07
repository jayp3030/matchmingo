const express = require("express");
const {
  saveUserDetails,
  getUserDetails,
} = require("../controllers/user.controller");
const { body } = require("express-validator");

const {
  saveUserImages,
  getImages,
} = require("../controllers/userImages.controller");

const fetchUser = require("../middleware/fetchUser.middleware")

const userRouter = express.Router();



userRouter.post(
  "/userDetails",
  body("first_name", "enter a valid name").isLength({ min: 2 }),
  body("last_name", "enter a valid last_name").isLength({ min: 2 }),
  saveUserDetails
);
userRouter.get("/getUserDetails",fetchUser, getUserDetails);
userRouter.post("/userImages",fetchUser, saveUserImages);
userRouter.get("/getImages", getImages);

module.exports = {
  userRouter,
};
