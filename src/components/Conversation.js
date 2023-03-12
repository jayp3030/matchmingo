import React, { useEffect, useState } from "react";
import img2 from "../images/landingPage02.jpg";

export default function Conversation({ data, currentUserId }) {
  const baseURl = "http://localhost:8000";
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userIds = data.members.find((id) => id !== currentUserId);
    async function getUserdata() {                                 // temporary will be changed
      const res = await fetch(`${baseURl}/details/getUser/${userIds}`)
        .then((res) => res.json())
        .then((result) => setUserData(result))
        .catch((err) => err);
    }
    getUserdata();
  }, []);

  return (
    <>
      <div className="msg_row">
        <div className="msg_info">
          <div className="msg_img">
            <img src={img2} alt="" />
          </div>
          <div className="msg_name">
            <h2>
                {userData && userData.first_name +" "+ userData.last_name}
            </h2>
            <p>3+ Messages</p>
          </div>
        </div>
        <div className="msg_time">
          <p>15m</p>
        </div>
      </div>
    </>
  );
}
