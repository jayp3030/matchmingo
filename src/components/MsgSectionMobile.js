/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import ChatPage from "./ChatPage";
import Conversation from "./Conversation";
import jwt_decode from "jwt-decode";
import img1 from "../images/285660_picture_image_pic_icon 1.png";
import img2 from "../images/favorite.png";
import img3 from "../images/icons8-messages-500 1.png";
import img4 from "../images/1167993_cog_cogwheel_configuration_parameters_properties_icon 1.png";
import img5 from "../images/landingPage05.jpg";

export default function MsgSectionMobile() {
  const baseURl = process.env.REACT_APP_BASEURL

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState([]);
  const [currentUser, setcurrentUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [fetchedChats, setFetchedChats] = useState([]);
  // ref
  const socket = useRef();

  useEffect(() => {
    setcurrentUser(jwt_decode(localStorage.getItem("token")).user.id);
    socket.current = io("https://matchmingosocket.onrender.com");
    socket.current.emit(
      "new-user-add",
      jwt_decode(localStorage.getItem("token")).user.id
    );
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [currentUser]);

  useEffect(() => {
    getChats();
  }, [currentUser]);


  // sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      console.log("2");
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);
  
  // receiving message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      console.log("5");
      console.log("i am receiving");
      console.log(data);

      setReceiveMessage(data);
      console.log("after receive message")
    });
  }, [receiveMessage]);

  async function getChats() {
    // first fetch the owner
    const response = await fetch(`${baseURl}/details/getUserDetails`, {
      method: "GET",
      headers: { "auth-token": localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((result) => fetchChatPartner(result.userId))
      .catch((err) => err);
  }

  // function to fetch userId of matched users
  const fetchChats=async()=>{
    if(!localStorage.getItem("token")){
      return
    }
    const response = await fetch(`${baseURl}/match/fetchMatch?id=${jwt_decode(localStorage.getItem("token")).user.id}`,{
      method : "GET",
      headers: { "Content-Type": "application/json" }
    })
    const json = await response.json()
    setFetchedChats(json)
  }
  useEffect(()=>{
    if(fetchedChats){
      for (let index = 0; index < fetchedChats.length; index++) {
        createChat(fetchedChats[index])
   
        
      }
    }
  },[fetchedChats])

  const createChat=async(rcvId)=>{

    if(!localStorage.getItem("token")){
      return
    }
    const response = await fetch(`${baseURl}/chat`,{
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body :JSON.stringify({
        senderId:jwt_decode(localStorage.getItem("token")).user.id,
        receiverId:rcvId
      })
    })
    const json = await response.json()
    setFetchedChats(json)
    console.log(json);
  }

  // then fetch its chat partners
  const fetchChatPartner = async (userId) => {
    // console.log({ userId });
    const data = await fetch(`${baseURl}/chat/${userId}`) // user must logged in or exist
      .then((res) => res.json())
      .then((result) => setChats(result))
      .catch((err) => err);
  };

  useEffect(()=>{
    fetchChats()
  },[])

  return (
    <>
    <div className="MsgSectionMobile_container">
        <div className="upper_part">
            {/* copy your code for message here */}
            <p>this is the part where you can integrate your code for like</p>
        </div>
        <div className="footer_mobile fcc">
            <div className="footer_mobile_container">
              <div className="footer_logos fcc">
                <img src={img1}></img>
              </div>
            
              
              <div  className="footer_logos fcc">
              <a href={"./like"}>
              <img src={img2}></img>
              </a>
              </div>
             
              
             
              <div  className="footer_logos fcc">
              <a href={"./chat"}>
              <img src={img3}></img>
              </a>
              </div>
             
              
              <div  className="footer_logos fcc">
              <img src={img4}></img>
              </div>
            </div>
        </div>

    </div>
      {/* <div className="msg_chat_wrapper">
     {fetchedChats && fetchedChats.length!==0  ?  <div className="msgs" id="msgs">
          
          {chats && chats.map((chat, index) => (
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
      </div> */}
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