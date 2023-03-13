/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import ChatPage from "./ChatPage";
import Conversation from "./Conversation";
import jwt_decode from "jwt-decode";

export default function MsgSection() {
  const baseURl = "http://localhost:8000";

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const [currentUser, setcurrentUser] = useState()
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isMatched, setisMatched] = useState(false)
  // ref
  const socket = useRef();

  useEffect(() => {
    setcurrentUser(jwt_decode(localStorage.getItem("token")).user.id)
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", jwt_decode(localStorage.getItem("token")).user.id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
    
    
  }, [currentUser]);

  // sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
    
  }, [sendMessage]);

  // receiving message from socket server
 

  useEffect(() => {
    
    getChats();
  }, []);

  async function getChats() {
    // first fetch the owner  ---------> issue
    const response = await fetch(`${baseURl}/details/getUserDetails`, {
      method: "GET",
      headers: { "auth-token": localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => fetchChatPartner(result.userId))
      .catch((err) => err)

    // then fetch its chat partners
  }

  const fetchChatPartner=async(userId)=>{
    console.log({userId})
    const data = await fetch(`${baseURl}/chat/${userId}`) // user must logged in or exist --------- some confusion so letter will done
        .then((res) => res.json())
        .then((result) => setChats(result))
        .catch((err) => err);
  }
  useEffect(() => {
    socket.current.on(
      "receive-message",
      (data) => {
        setReceiveMessage(data);
      },
    );
  });

  return (
    <>

      <div className="msg_chat_wrapper">
     { isMatched ?  <div className="msgs" id="msgs">
          {console.log({chats})}
          {chats && chats.map((chat, index) => (
            <div
              className="msg_container"
              onClick={() => {
                setCurrentChat(chat);
                document.getElementById("msg_like_wrapper").style.transform =
                  "translateX(-60vw)";
              }}
            >
              {console.log(`chat :  `)}
              <Conversation
                data={chat}
                currentUserId={currentUser}
                key={index}
              />
            </div>
          ))}
        </div>  : <div className="msgs notMatched" id="msgs notMathced">
          <h2>
            Find Your Match to Start Conversation
          </h2>
        </div>}
        <div className="chat_Page">
          <ChatPage
            chat={currentChat}
            currentUser={currentUser}
            setSendMessage={setSendMessage}
            receiveMessage={receiveMessage}
          />
        </div>
      </div>
    </>
  );
}
     {/* <div className="msgs" id="msgs">
          {console.log({chats})}
          {chats && chats.map((chat, index) => (
            <div
              className="msg_container"
              onClick={() => {
                setCurrentChat(chat);
                document.getElementById("msg_like_wrapper").style.transform =
                  "translateX(-60vw)";
              }}
            >
              {console.log(`chat :  `)}
              <Conversation
                data={chat}
                currentUserId={currentUser}
                key={index}
              />
            </div>
          ))}
        </div> */}