import React from "react";
import matchmingo from "../images/MatchMingo.png";
import SidePresentation from "./SidePresentation";

export default function SidePage() {
  return (
    <>
      <div className="sidebar_wrapper">
        <img src={matchmingo} alt='MatchMingo' />
        {/* <SidePresentation /> */}
      </div>
    </>
  );
}
