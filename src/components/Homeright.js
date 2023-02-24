import React from "react";
import img from "../images/landingPage01.jpg";
import img2 from "../images/landingPage02.jpg";
import ChatPage from "./ChatPage";

export default function Homeright() {
  return (
    <>
      <div className="home_outer">
        <div className="home_left">
          <div className="home_left_top">
            <div className="home_left_top_left">
              <img src={img2}></img>
            </div>
            <div className="home_left_top_middle">
              Sanko Rana
            </div>
            <div className="home_left_top_right">
            <i class="fa-solid fa-user-pen"></i>
            </div>
          </div>
          <div className="home_left_middle">
            <div className="home_left_middle_left"><i class="fa-sharp fa-solid fa-heart"></i>Likes</div>
            <div className="home_left_middle_right"><i class="fa-solid fa-message"></i>Messages</div>
          </div>
          <div className="home_left_bottom">
            <ChatPage />
          </div>
        </div>
        <div className="home_right">
          <div className="header">
            <h1>MatchMingo</h1>
          </div>
          {/* <div className="heart">
            <i class="fa-regular fa-heart"></i>
          </div> */}
          <div className="card">
            <img src={img} alt="" />
            <div className="userDetails">
              <div className="userNameAge">Vedant , 20</div>
              <div className="userBranch">CE</div>
            </div>
            <div className="icons">
              <i class="fa-regular fa-circle-xmark"></i>
              <i class="fa-regular fa-circle-check"></i>
              <i class="fa-solid fa-circle-info"></i>
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-gift"></i>
            </div>
          </div>
          <div className="home_bottom">
            <div className="bottom_inner">
              <div className="box">
                <i class="fa-regular fa-circle-left"></i>
                <p>PASS</p>
              </div>
              <div className="box">
                <i class="fa-regular fa-circle-right"></i>
                <p>LIKE</p>
              </div>
              <div className="box">
                <i class="fa-regular fa-circle-up"></i>
                <p>OPEN PROFILE</p>
              </div>
              <div className="box">
                <i class="fa-regular fa-circle-down"></i>
                <p>CLOSE PROFILE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
