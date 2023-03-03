import React from "react";
import SidePage from "./SidePage";
import Signup from "./Signup";
import Name from "./Name";
import Age from "./Age";
import College from "./College";
import Hobby from "./Hobby";
import SidePresentation from "./SidePresentation";
import Uploadphoto from "./Uploadphoto";
import UploadId from "./UploadId";


export default function ProfileSetup() {

  const getUserID = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
  return (

    <>
      <SidePage />
<<<<<<< HEAD
        <div className="profile_setup" id="profile_setup">
          <Signup />
          <Name />
          <Age />
          <College />
          <Hobby />
          <Uploadphoto />
          <UploadId />
        </div>
      
=======
      <div className="profile_setup" id="profile_setup">
        <Signup />
        <Name getUserID={getUserID}/>
        <Age getUserID={getUserID}/>
        <College getUserID={getUserID}/>
        <Hobby getUserID={getUserID}/>
        < Uploadphoto getUserID={getUserID}/>
        <UploadId getUserID={getUserID}/>
      </div>
>>>>>>> 3020502bc80e6f5ed4a7152e6cec02389d149ae9
    </>
  );
}
