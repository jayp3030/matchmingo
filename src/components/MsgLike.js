import React from "react";
import LikeSection from "./LikeSection";
import MsgSection from "./MsgSection";


export default function MsgLike(props) {
  return (
    <div className="msg_like_wrapper" id="msg_like_wrapper">
      <LikeSection  setPersonalDT={props.setPersonalDT} setuserCardImgs={props.setuserCardImgs}/>
      <MsgSection />
    </div>
  );
}
