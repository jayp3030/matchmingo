/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import img2 from "../images/landingPage02.jpg";

export default function MsgSection() {
  const baseURl = "http://localhost:8000";

  const [chats, setChats] = useState([]);
  const [user, setUser] = useState([]);

  async function getChats() {
    // first fetch the owner  ---------> issue 
    const res = await fetch(`${baseURl}/details/getUserDetails`)
      .then((res) => res.json())
      .then((result) => setUser(result))
      .catch((err) => err);
    console.log(user);

    // then fetch its chat partners
    const data = await fetch(`${baseURl}/chat/${user._id}`) // user must logged in or exist --------- some confusion so letter will done
      .then((res) => res.json())
      .then((result) => setChats(result))
      .catch((err) => err);
    console.log(chats);
  }

  useEffect(() => {
    getChats();
  }, []);
  return (
    <>
      <div className="msgs" id="msgs">
        {/* --------- map chats here ----------  */}
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
