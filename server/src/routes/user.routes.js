const express = require("express")
const {saveUserDetails} = require("../controllers/user.controller")
const { body } = require('express-validator');

const userRouter =  express.Router()

userRouter.post("/userDetails",
body('name', 'enter a valid name').isLength({ min: 2 }),
body('last_name', 'enter a valid last_name').isLength({ min: 2 }),
saveUserDetails)



module.exports = {
    userRouter,
}