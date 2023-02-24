const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userAuth",
        required: true
    },
    
  first_name:{
    type:String,
    requried:true
  },
  last_name:{
    type:String,
    requried:true
  }

});

module.exports = mongoose.model("user",userSchema)