/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import img from "../images/landingPage03.jpg";
import { format } from "timeago.js";

export default function ChatPage({
  chat,
  currentUser,
  setSendMessage,
  receiveMessage,
}) {
  const baseURl = "http://localhost:8000";
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [convesationPageImg, setConvesationPageImg] = useState([]);
  const [newMessage, setNewMessage] = useState({
    msg_input: "",
  });
  const ref = useRef();

  // fetching data for header name  and message...
  useEffect(() => {
    const userIds = chat?.members?.find((id) => id !== currentUser);
    // console.log(userIds);
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
  }, [chat, currentUser]);

  // scroll to the last message
  useEffect(() => {
    document.getElementById("chatPage_middle").scrollTop =
      document.getElementById("chatPage_middle").scrollHeight;
  }, [messages]);

  const handleChange = (e) => {
    e.preventDefault();
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
    console.log(newMessage);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    console.log("1");
    const messageToSend = {
      senderId: currentUser,
      text: newMessage.msg_input,
      chatId: chat._id,
    };
    // send message to socket server
    const receiverId = chat.members.find((id) => id !== currentUser);
    setSendMessage({ ...messageToSend, receiverId });
    // send messege to database
    if (messageToSend.text !== undefined) {
      try {
        const response = await fetch(`${baseURl}/message`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(messageToSend),
        });
        const json = await response.json();
        setMessages([...messages, json]);
        setNewMessage({
          msg_input: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getUserImages = async () => {

    const response = await fetch(`${baseURl}/details/getUserImageArr`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        userArray: [chat.members.find((id) => id !== currentUser)]
      })
    });
    const json = await response.json();
    setConvesationPageImg(json)
  }
  

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);
  useEffect(()=>{
    getUserImages()
  })

  return (
    <div className="chatPage">
      <div className="chatPage_upper">
        <div className="chatPage_upper_left">
          <i
            className="fa-solid fa-chevron-left"
            onClick={() => {
              document.getElementById("msg_like_wrapper").style.transform =
                "translateX(-30vw)";
            }}
          />
          <img alt="userImage" src={`data:image/jpeg;base64,${convesationPageImg[0] && convesationPageImg[0].data
                }`}></img>
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
      {messages && (
        <div className="chatPage_middle" id="chatPage_middle">
          {messages.map((message, index) => {
            return (
              <div ref={ref} key={index}>
                <div
                  className={
                    message.senderId === currentUser ? "right" : "left"
                  }
                >
                  <p>{message.text}</p>
                  <span className="time_ago">
                    {format(message.createdAt).split(" ")[0] +
                      format(message.createdAt).split(" ")[1][0] +
                      " " +
                      format(message.createdAt).split(" ")[2]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="chatPage_bottom">
        {/* <div className="chatPage_bottom_suggestions">
          <p onClick={() => {}}>Hello</p>
          <p>Hello,Baby</p>
          <p>Bye then</p>
        </div> */}
        <div className="chatPage_bottom_inner">
          {/* <i className="fa-solid fa-camera"></i> */}
          <input
            type="text"
            placeholder="Message..."
            value={newMessage.msg_input}
            onChange={handleChange}
            name="msg_input"
          ></input>
          <i className="fa-solid fa-play" onClick={handleSend}></i>
        </div>
      </div>
    </div>
  );
}
