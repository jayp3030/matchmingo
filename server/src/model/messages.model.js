const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    chatId :{
        type : String,
    },
    senderId:{
        type : String, 
    },
    text :{
        type : String,
    }
},
{
    timestamps : true,
});

module.exports = new mongoose.model('Message' , messagesSchema);