import React from "react";
import SidePage from "./SidePage";
import Signup from "./Signup";
import Name from "./Name";
import Age from "./Age";
import College from "./College";
import Hobby from "./Hobby";
import SidePresentation from "./SidePresentation";
export default function ProfileSetup() {
  return (
    <>
      <SidePage />
      <div className="profile_setup" id="profile_setup">
        <Signup />
        <Name />
        <Age />
        <College />
        <Hobby />
      </div>
    </>
  );
}
