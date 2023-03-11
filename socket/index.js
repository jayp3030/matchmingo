const io = require('socket.io')(8800 , {
    cors :{
        origin : 'http://localhost:3000'
    }
});

let activeUser = [];

io.on('connection' , (socket) => {

    // add new user
    socket.on('new-user-add' , (newUserId) => {
        // user is not already added 
        // console.log("hello")
        // console.log({newUserId})
        if (! activeUser.some( (user) => user.userId === newUserId)) {
            activeUser.push({
                userId : newUserId,
                socketId : socket.id
            })
        }
        // console.log('connected users :' , activeUser); 
        io.emit('get-users' , activeUser);
    })

    //send message
    socket.on('send-message' , (data) => {
        const receiverId = data.receiverId
        console.log(receiverId) 
        console.log({activeUser})
        const user = activeUser.find((user) => 
            user.userId === receiverId);
        // console.log('sending to ', user); 
        // console.log('data' , data);
        console.log(user)
        if (user) {
            io.to(user.socketId).emit('receive-message' , data);
        }
    })

    socket.on('disconnect' , () => {
        activeUser = activeUser.filter( (user) => user.socketId !== socket.id)
        console.log('user disconnected' , activeUser);
        
        io.emit('get-users' , activeUser);
    })

})