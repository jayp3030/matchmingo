/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import img2 from "../images/landingPage02.jpg";
import ChatPage from "./ChatPage";
import Conversation from "./Conversation";

export default function MsgSection() {
  const baseURl = "http://localhost:8000";

  const [user, setUser] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  // ref
  const socket = useRef;

  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user.userId);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // receiving message from socket server
  useEffect(() => {
    socket.current.on(
      "receive-message",
      (data) => {
        setReceiveMessage(data);
      },
      []
    );
  });

  useEffect(() => {
    async function getChats() {
      // first fetch the owner  ---------> issue
      const response = await fetch(`${baseURl}/details/getUserDetails`, {
        method: "GET",
        headers: { "auth-token": localStorage.getItem("token") },
      })
        .then((res) => res.json())
        .then((result) => setUser(result))
        .catch((err) => err);
        console.log(response);                     // ------ bug ------

      // then fetch its chat partners
      const data = await fetch(`${baseURl}/chat/${user.userId}`) // user must logged in or exist --------- some confusion so letter will done
        .then((res) => res.json())
        .then((result) => setChats(result))
        .catch((err) => err);
        console.log(data);                        // -------- bug -----
    }
    getChats();
    console.log(user);
    console.log(chats);
    console.log(currentChat);
  }, []);

  return (
    <>
      <div className="msg_chat_wrapper">
        <div className="msgs" id="msgs">
          {chats.map((chat, index) => (
            <div
              className="msg_container"
              onClick={() => {
                setCurrentChat(chat);
                document.getElementById("msg_like_wrapper").style.transform =
                  "translateX(-60vw)";
              }}
            >
              <Conversation
                data={chat}
                currentUserId={user.userId}
                key={index}
              />
            </div>
          ))}
        </div>
        <div className="chat_Page">
          <ChatPage
            chat={currentChat}
            currentUser={user.userId}
            sendMessage={sendMessage}
            receiveMessage={receiveMessage}
          />
        </div>
      </div>
    </>
  );
}
