import React from "react";
import img from "../images/landingPage03.jpg";


export default function ChatPage() {

  return (
    <div className="chatPage">
      <div className="chatPage_upper">
        <div className="chatPage_upper_left">
          <i className="fa-solid fa-chevron-left"></i>
          <img src={img}></img>
        </div>
        <div className="chatPage_upper_right">
          <h4>Pooja rana</h4>
          <p>Active 3m ago</p>
        </div>
        <div className="info_icon">
          <i className="fa-solid fa-circle-info"></i>
        </div>
      </div>
      <div className="chatPage_middle">
        <div className="left">
          <p className="msgContent">hello</p>
        </div>
        <div className="right">
          <p className="msgContent">hello</p>
        </div>
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
