const io = require('socket.io')(8800 , {
    cors :{
        origin : 'https://matchmingo.netlify.app'
    }
});
// https://matchmingosocket.onrender.com

let activeUser = [];

io.on('connection' , (socket) => {

    // add new user
    socket.on('new-user-add' , (newUserId) => {
        // user is not already added 
        if (! activeUser.some( (user) => user.userId === newUserId)) {
            activeUser.push({
                userId : newUserId,
                socketId : socket.id
            })
        }
        console.log('connected users :' , activeUser); 
        io.emit('get-users' , activeUser);
    })

    //send message
    socket.on('send-message' , (data) => {
        const receiverId = data.receiverId
        const user = activeUser.find((user) => 
            user.userId === receiverId);
        console.log('sending to ', user); 
        console.log('data' , data);
        if (user) {
            io.to(user.socketId).emit('receive-message' , data);
            console.log("4");
        }
    })
    socket.on('disconnect' , () => {
        activeUser = activeUser.filter( (user) => user.socketId !== socket.id)
        console.log('user disconnected' , activeUser);
        
        io.emit('get-users' , activeUser);
    })

})