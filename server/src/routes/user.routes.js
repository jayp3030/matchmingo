const express = require("express")
const {saveUserDetails} = require("../controllers/user.controller");
const { body } = require('express-validator');
// const multer = require('multer');

const { saveUserImages , getImages } = require("../controllers/userImages.controller");

const userRouter =  express.Router()

userRouter.post("/userDetails"
, body('first_name', 'enter a valid name').isLength({ min: 2 })
, body('last_name', 'enter a valid last_name').isLength({ min: 2 })
, saveUserDetails
);



// const storage = multer.diskStorage({
//     destination : (req , file , cb) =>{
//         cb(null , 'uploads');
//     },

//     filename : (req , file , cb) =>{
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.originalname + '-' + uniqueSuffix);
//     }
// })

// const upload = multer({storage : storage});


// userRouter.post("/userImages",  upload.single('image'), saveUserImages);


userRouter.post("/userImages", saveUserImages);
userRouter.get("/getImages", getImages);



module.exports = {
    userRouter,
}