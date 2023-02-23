const express = require("express")
const userAuth = require("../model/userAuth.model")
const usersInfo = require("../model/user.model")

async function saveUserDetails(req,res){
    const {userId,first_name,last_name} = req.body
    let user = await userAuth.findOne({_id:userId})
    if(!user){
        return res.status(400)
    }
    user = await usersInfo.create({
        userId:userId,
        first_name:first_name,
        last_name:last_name
    })
    return res.json(user)
}


module.exports = {saveUserDetails}