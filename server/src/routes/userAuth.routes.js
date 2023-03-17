const express = require("express")
const {createUser,loginUser,requestPasswordReset,resetPassword,userAuthCompleted,userAuthCompletedStatus} = require("../controllers/userAuth.controller")
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

userAuthRouter.post("/requestResetPassword"
, body('email', 'enter a valid email').isEmail()
, requestPasswordReset
)

userAuthRouter.post("/resetPassword"
, body('email', 'enter a valid email').isEmail()
, resetPassword
)

userAuthRouter.post("/userAuthCompleted"
, userAuthCompleted
)
userAuthRouter.get("/userAuthCompletedStatus"
, userAuthCompletedStatus
)

module.exports = {
    userAuthRouter,
}