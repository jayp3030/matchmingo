const chatModel = require("../model/chats.model");

async function createChat(req, res) {
  const { senderId, receiverId } = req.body;

  try {
    const existChat = await chatModel.find({
      members : [senderId, receiverId] 
    });
    const existChatRev = await chatModel.find({
      members : [receiverId, senderId] 
    });
    if (existChat.length === 0 && existChatRev.length === 0) {
      const newChat = await chatModel.create({
        members: [senderId, receiverId],
      });
    }
    else
    {
      console.log("hello")
      return
    }
    res.status(201).json(true);
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
