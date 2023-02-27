const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userAuth",
    required: true
  },

  first_name: {
    type: String,
    requried: true
  },
  last_name: {
    type: String,
    requried: true
  },
  birth_date :{
  type: Date,
  required: true
  },
  gender :{
    type : String,
    required: true
  },
  collage :{
    type : String,
    required :true
  },
  branch : {
    type:String,
    required : true
  },
  hometown :{
    type : String,
    required : true
  },
  hobbies :{
    type : [String],
    required : true
  },
  bio : {
    type : String,
  }

} , 

{ versionKey: false }

);

module.exports = mongoose.model("user", userSchema)