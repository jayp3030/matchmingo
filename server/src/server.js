const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();

const app = require('./app')
const PORT = 8000;
const MONGO_URL = 'mongodb://0.0.0.0:27017/MatchMingo' 
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

