/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import img2 from "../images/landingPage02.jpg";
import ChatPage from "./ChatPage";
import Conversation from "./Conversation";

export default function MsgSection() {
  const baseURl = "http://localhost:8000";

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState([]);
  const [user, setUser] = useState([]);

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

  useEffect(() => {
    getChats();
    console.log(user);
    console.log(chats);
  }, []);
  return (
    <>
      <div className="msgs" id="msgs">
        {/* --------- map chats here ----------  */}
        {chats.map((chat, index) => (
          <div className="msg_container" onClick={()=> setCurrentChat(chat)}>
            <Conversation  data={chat} currentUserId={user.userId} key={index} />
          </div>
        ))}
      </div>
      <div className="test_chat">
        {/* <ChatPage chat={currentChat} currentUser={user._id}/> --------  dont remove this one  */}
      </div>
    </>
  );
}

{
  /* <div className="msg_row">
          <div className="msg_info">
            <div className="msg_img">
              <img src={img2} alt="" />
            </div>
            <div className="msg_name">
              <h2>xyz</h2>
              <p>3+ Messages</p>
            </div>
          </div>
          <div className="msg_time">
            <p>15m</p>
          </div>
        </div> */
}
