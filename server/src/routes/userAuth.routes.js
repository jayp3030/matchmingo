const express = require("express")
const {createUser,loginUser} = require("../controllers/userAuth.controller")
const { body } = require('express-validator');

const userAuthRouter =  express.Router()

userAuthRouter.post("/createUser"
, body('email', 'enter a valid email').isEmail()
, body('password', 'enter a valid password').isLength({ min: 8 })
, createUser
)

userAuthRouter.post("/loginUser"
, body('email', 'enter a valid email').isEmail()
, body('password', 'enter a valid password').isLength({ min: 8 })
, loginUser
)


module.exports = {
    userAuthRouter,
}