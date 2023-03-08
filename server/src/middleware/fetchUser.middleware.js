const jwt = require('jsonwebtoken');
require("dotenv").config();
const privateKey = process.env.PRIVATE_KEY


const fetchUser = (req,res,next)=>{
    // Get the user from jwt token and add id to req object 
    const token = req.header('auth-token')
    if(!token){
        res.status(401).json({err:"please send valid auth token"})
    }
    try {
        const data = jwt.verify(token,privateKey)
        req.user = data.user
        console.log(req.user)
    } catch (error) {
        res.status(400)
    }
    next()
}

module.exports = fetchUser