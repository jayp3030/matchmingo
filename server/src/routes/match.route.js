const express = require("express")
const {addLike,fetchMatches} = require("../controllers/match.controller")

const matchRouter =  express.Router()

matchRouter.post("/addLike", addLike)
matchRouter.get("/fetchMatch", fetchMatches)

module.exports = {
    matchRouter,
}