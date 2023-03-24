import React, { useEffect, useState } from "react";
import img2 from "../images/landingPage02.jpg";
import jwt_decode from "jwt-decode";

export default function Conversation({ data, currentUserId }) {
  const baseURl = process.env.REACT_APP_BASEURL
  const [userData, setUserData] = useState([]);
  const [convesationPageImg, setConvesationPageImg] = useState([]);

  useEffect(() => {
    console.log("this is data "+ data)
    const userIds = data.members.find((id) => id !== currentUserId);
    console.log("mattch " +userIds)
    
    async function getUserdata() {                                 // temporary will be changed
      const res = await fetch(`${baseURl}/details/getUserById?id=${userIds}`)
        .then((res) => res.json())
        .then((result) => setUserData(result))
        .catch((err) => err);
    }
    if(userIds){
      getUserdata();
    }
    
    getUserImages()
  }, []);
  
  const getUserImages = async () => {

    const response = await fetch(`${baseURl}/details/getUserImageArr`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        userArray: [data.members.find((id) => id !== currentUserId)]
      })
    });
    const json = await response.json();
    setConvesationPageImg(json)
  }

  return (
    <>
      <div className="msg_row">
        <div className="msg_info">
          <div className="msg_img">
            <img src={`data:image/jpeg;base64,${convesationPageImg[0] && convesationPageImg[0].data
                }`} alt="" />
          </div>
          <div className="msg_name">
            <h2>
                {userData && userData.first_name +" "+ userData.last_name}
            </h2>
            {/* <p>3+ Messages</p>  */}
          </div>
        </div>
        <div className="msg_time">
          {/* <p>15m</p>  */}
        </div>
      </div>
    </>
  );
}
