/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import img2 from "../images/landingPage02.jpg";
import ChatPage from "./ChatPage";
import Conversation from "./Conversation";

export default function MsgSection() {
  const baseURl = "http://localhost:8000";

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [user, setUser] = useState([]);
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
      const res = await fetch(`${baseURl}/details/getUserDetails`)
        .then((res) => res.json())
        .then((result) => setUser(result))
        .catch((err) => err);

      // then fetch its chat partners
      const data = await fetch(`${baseURl}/chat/${user.userId}`) // user must logged in or exist --------- some confusion so letter will done
        .then((res) => res.json())
        .then((result) => setChats(result))
        .catch((err) => err);
    }
    getChats();
    console.log(user);
    console.log(chats);
    console.log(currentChat);
  }, []);

  return (
    <>
      <div className="msgs" id="msgs">
        {/* --------- map chats here ----------  */}
        {chats.map((chat, index) => (
          <div className="msg_container" onClick={() => setCurrentChat(chat)}>
            <Conversation data={chat} currentUserId={user.userId} key={index} />
          </div>
        ))}
      </div>
      <div className="test_chat">
        {/* <ChatPage
          chat={currentChat}
          currentUser={user.userId}
          setSendMessage={setSendMessage}
          receiveMessage={receiveMessage}
        /> */}
      </div>
    </>
  );
}
