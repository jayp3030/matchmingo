/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import img from "../images/landingPage03.jpg";
// import { format } from "timeago.js";



export default function ChatPage({ chat , currentUser , sendMessage , receiveMessage }) {
  const baseURl = "http://localhost:8000";
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState({
    msg_input : "",
  });
  const scroll = useRef()

  useEffect( () => {
     if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
        setMessages([...messages , receiveMessage]);
     }
  },[receiveMessage])
  
  // fetching data for header name  and message...
  useEffect(() => {
    const userIds = chat?.members?.find((id) => id !== currentUser);
    console.log(userIds);
    async function getUserdata() {
      const res = await fetch(`${baseURl}/details/getUser/${userIds}`)
        .then((res) => res.json())
        .then((result) => setUserData(result))
        .catch((err) => err);
    }
    if (chat !== null) getUserdata();

    async function getMessages() {
      try {
        const res = await fetch(`${baseURl}/message/${chat._id}`)
          .then((res) => res.json())
          .then((result) => setMessages(result))
          .catch((err) => err);
      } catch (error) {
        console.log(error);
      }
    }
    if (chat !== null) getMessages();
    console.log(userData);
    console.log(messages);
  }, [chat, currentUser]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewMessage({...newMessage , [e.target.name]: e.target.value});
    console.log(newMessage);
  }

  const handleSend = async (e) => {
      e.preventDefault();

      const messageToSend = {
        senderId : currentUser,
        text : newMessage.msg_input,
        chatId : chat._id
      }
      console.log(messageToSend.text);                  // bug

      // send messege to database 

      if (messageToSend.text !== undefined) {           // here is one bug
        try {
          const response = await fetch(`${baseURl}/message` , {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(messageToSend),
          })
          setMessages([...messages , response]);
          setNewMessage("");
          console.log(newMessage);
          console.log(newMessage);
        } catch (error) {
          console.log(error);
        }
      }

      // send message to socket server

      const receiverId = chat.members.find( (id) => id !== currentUser);
      sendMessage( [...messages , receiverId]);
  }

  // scroll to the last message 
  useEffect( () => {
    scroll.current?.scrollIntoView({behaviour : 'smooth'})  /* bug here */
  },[messages])

  return (
    <div className="chatPage">
      <div className="chatPage_upper">
        <div className="chatPage_upper_left">
          <i className="fa-solid fa-chevron-left" onClick={() => {
              document.getElementById("msg_like_wrapper").style.transform =
              "translateX(-30vw)"
          }} />
          <img src={img}></img>
        </div>
        <div className="chatPage_upper_right">
          <h4>{userData && userData.first_name + " " + userData.last_name}</h4>
          {/* <p>Active 3m ago</p> */}
        </div>
        <div className="info_icon">
          <i className="fa-solid fa-circle-info"></i>
        </div>
      </div>
      <hr />
      <div className="chatPage_middle" >
        {messages.map((message) => (                /*  here is one bug */
          <>
            <div className={message.senderId === currentUser ? 'right':'left'}>
              <p>
                {message.text}
              </p>
              <span className="time_ago">
                {message.createdAt}
              </span>
            </div>
          </>
        ))}
      </div>
      <div className="chatPage_bottom">
        <div className="chatPage_bottom_suggestions">
          <p>Hello</p>
          <p>Hello,Baby</p>
          <p>Bye then</p>
        </div>
        <div className="chatPage_bottom_inner">
          <i className="fa-solid fa-camera"></i>
          <input type="text" placeholder="Message..." onChange={handleChange} name="msg_input"></input>
          <i className="fa-solid fa-play" onClick={handleSend}></i>
        </div>
      </div>
    </div>
  );
}
