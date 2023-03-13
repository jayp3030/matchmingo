const express = require("express");
const fetchUser = require("../middleware/fetchUser.middleware")
const {
  saveUserDetails,
  getUserDetails,
  getUser,
  getAllGirlsId,
  getAllBoysId
  
} = require("../controllers/user.controller");
const { body } = require("express-validator");

const {
  saveUserImages,
  getImages,
  getUserImageArr,
  getUserImage,
  getUserIDImage
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
userRouter.get("/getAllGirlsId", getAllGirlsId);
userRouter.get("/getAllBoysId", getAllBoysId);

userRouter.get('/getUserIDImage',fetchUser, getUserIDImage)

module.exports = {
  userRouter,
};
