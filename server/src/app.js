const express = require('express');
const helmet = require('helmet')
const cors = require('cors');
const { userAuthRouter } = require('./routes/userAuth.routes');
const {userRouter} = require("./routes/user.routes")
const imageModel = require('./model/user.model')

const app = express();

app.use(helmet())

app.use(cors());
app.use(express.json());

app.use("/auth",userAuthRouter)
app.use("/details",userRouter)

app.get('/uploadedimgs' , async (req ,res) =>{
    const allImg = await imageModel.find();
    res.json(allImg);
})

app.get('/' , (req , res) =>{
    res.status(200).json({ hi : 'how are you'});
})

module.exports = app;