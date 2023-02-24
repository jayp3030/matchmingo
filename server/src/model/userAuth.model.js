const mongoose = require("mongoose")
const { Schema } = mongoose;

const userAuthSchema = new Schema({

  email:{
    type:String,
    requried:true
  },
  password:{
    type:String,
    requried:true
  }

});

module.exports = mongoose.model("userAuth",userAuthSchema)