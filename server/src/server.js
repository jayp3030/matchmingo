const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();


const app = require('./app')
const password = process.env.MONGO_PASS
const PORT = 8000;
const MONGO_URL = `mongodb+srv://matchmingo:dhruwang@clustermm.t9rtc3r.mongodb.net/matchmingo`
const server = http.createServer(app);
mongoose.set('strictQuery', true);

mongoose.connection.once('open' , ()=>{
    console.log('connection is ready');
})

mongoose.connection.on('error' , (err)=>{
    console.log(err);
})

async function startServer(){   
    await mongoose.connect(`${MONGO_URL}`);

    server.listen(PORT ,  ()=>{
        console.log(`Listening on ${PORT}..`);
    })
}

startServer();

