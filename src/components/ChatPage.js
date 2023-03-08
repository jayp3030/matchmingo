/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import img from "../images/landingPage03.jpg";
import { format } from "timeago.js";

export default function ChatPage({ chat, currentUser }) {
  const baseURl = "http://localhost:8000";
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const userIds = chat?.members?.find((id) => id !== currentUser);
    console.log(userIds);
    async function getUserdata() {
      // temporary will be changed
      const res = await fetch(`${baseURl}/details/getUserDetails`)
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

  return (
    <div className="chatPage">
      <div className="chatPage_upper">
        <div className="chatPage_upper_left">
          <i className="fa-solid fa-chevron-left"></i>
          <img src={img}></img>
        </div>
        <div className="chatPage_upper_right">
          <h4>{userData && userData.first_name + " " + userData.last_name}</h4>
          <p>Active 3m ago</p>
        </div>
        <div className="info_icon">
          <i className="fa-solid fa-circle-info"></i>
        </div>
      </div>
      <hr />
      <div className="chatPage_middle">
        {messages.map((message) => (                /*  here is one bug */
          <>
            <div className={message.senderId === currentUser ? 'right':'left'}>
              <p>
                {message.text}
              </p>
              <span>
                {format(message.createdAt)}
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
          <input type="text" placeholder="Message..."></input>
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
    </div>
  );
}
