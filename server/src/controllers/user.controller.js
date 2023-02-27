const express = require("express")
const userAuth = require("../model/userAuth.model")
const usersInfo = require("../model/user.model")

async function saveUserDetails(req,res){
    const {
        userId,
        first_name,
        last_name,
        birth_date,
        gender,
        collage,
        branch,
        hometown,
        hobbies,
        bio
    } = req.body
    let user = await userAuth.findOne({_id:userId})
    if(!user){
        return res.status(400)
    }
    user = await usersInfo.create({
        userId:userId,
        first_name:first_name,
        last_name:last_name,
        birth_date:birth_date,
        gender : gender,
        collage : collage,
        branch : branch,
        hometown : hometown,
        hobbies : hobbies,
        bio : bio
    })
    return res.json(user)
}


module.exports = {saveUserDetails}