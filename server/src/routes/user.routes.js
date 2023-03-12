const express = require("express");
const fetchUser = require("../middleware/fetchUser.middleware")
const {
  saveUserDetails,
  getUserDetails,
  getUser
} = require("../controllers/user.controller");
const { body } = require("express-validator");

const {
  saveUserImages,
  getImages,
  getUserImageArr,
  getUserImage
} = require("../controllers/userImages.controller");


const userRouter = express.Router();



userRouter.post(
  "/userDetails",
  body("first_name", "enter a valid name").isLength({ min: 2 }),
  body("last_name", "enter a valid last_name").isLength({ min: 2 }),
  saveUserDetails
);
userRouter.get("/getUser/:id", getUser);
// userRouter.post("/userImages",fetchUser, saveUserImages);
userRouter.get("/getUserDetails",fetchUser, getUserDetails);
userRouter.post("/userImages", saveUserImages);
userRouter.get("/getImages", getImages);
userRouter.get("/getUserImage",fetchUser, getUserImage);
userRouter.post("/getUserImageArr", getUserImageArr);


module.exports = {
  userRouter,
};
