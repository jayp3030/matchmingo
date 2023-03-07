const messageModel = require('../model/messages.model');

async function addMessage (req,res){

    const { chatId , senderId , text} = req.body;

    try {
        const message = await messageModel.create({
            chatId : chatId,
            senderId : senderId,
            text : text,
        })

        res.status(201).json(message);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getMessage (req,res){
    const { chatId } = req.params;

    try {
        const result = await messageModel.find({
            chatId:chatId,
        })
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    addMessage,
    getMessage
}