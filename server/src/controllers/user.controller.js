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
        sexual_orientation,
        college,
        branch,
        passout_year,
        hometown,
        hobbies,
        bio
    } = req.body
    let user = await userAuth.findOne({_id:userId})
    if(!user){
        return res.status(400)
    }

    const updatedUser = await usersInfo.findOneAndUpdate({userId:userId},{
        userId:userId,
        first_name:first_name,
        last_name:last_name,
        birth_date:birth_date,
        gender : gender,
        sexual_orientation : sexual_orientation,
        college : college,
        branch : branch,
        passout_year:passout_year,
        hometown : hometown,
        hobbies : hobbies,
        bio : bio
    },{
        upsert:true
    })
    res.status(204).json({success:true})
}


module.exports = {saveUserDetails}