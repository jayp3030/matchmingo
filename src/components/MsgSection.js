/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import img2 from "../images/landingPage02.jpg";

export default function MsgSection() {
  return (
    <>
      <div className="msgs" id="msgs">
        <div className="msg_row">
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
        </div>

        <div className="msg_row">
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
        </div>
      </div>
    </>
  );
}
