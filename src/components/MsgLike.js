import React from "react";
import LikeSection from "./LikeSection";
import MsgSection from "./MsgSection";

export default function MsgLike() {
  return (
    <div className="msg_like_wrapper" id="msg_like_wrapper">
      <LikeSection />
      <MsgSection />
    </div>
  );
}
