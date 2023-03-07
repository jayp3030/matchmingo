const chatModel = require("../model/chats.model");

async function createChat(req, res) {
  const { senderId, receiverId } = req.body;

  try {
    const newChat = await chatModel.create({
      members: [senderId, receiverId],
    });
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function userChats(req, res) {
  try {
    const chats = await chatModel.find({
      members: { $in : [req.params.userId] }
    });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json(error);
  }
}
async function findChat(req, res) {
    try {
        const chat = await chatModel.findOne({
            members : { $all : [req.params.firstId , req.params.secondId]}
        })
        console.log(chat);
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).status(error);
    }
}

module.exports = {
  createChat,
  userChats,
  findChat,
};
