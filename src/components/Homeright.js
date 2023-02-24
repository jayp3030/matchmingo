import React from "react";
import img from "../images/landingPage01.jpg";

export default function Homeright() {
  return (
    <>
      <div className="home_outer">
        <div className="home_left"></div>
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
