const express = require('express');
const { addMessage, getMessage } = require('../controllers/massage.controller');

const messageRouter = express.Router();

messageRouter.post('/' , addMessage);
messageRouter.get('/:chatId' , getMessage);

module.exports = messageRouter;