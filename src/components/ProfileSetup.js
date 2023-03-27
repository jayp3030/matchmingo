import React, { useState } from "react";
import SidePage from "./SidePage";
import Signup from "./Signup";
import Name from "./Name";
import Age from "./Age";
import College from "./College";
import Hobby from "./Hobby";
import SidePresentation from "./SidePresentation";
import Uploadphoto from "./Uploadphoto";
import UploadId from "./UploadId";

var context =React.createContext();
export default function ProfileSetup() {

  const [spinner, setspinner] = useState(false)

  const getUserID = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
  var [data,setData]=useState();
  var [personal,setPersonal]=useState();
  var [combine,setCombine]=useState();
  
  function handleCallback(data,gen_bir){
    // console.log("new_data=");
    // console.log(data);
    setData(data);
    setPersonal(gen_bir);
  // setCombine(...data,...personal);
  }
  
  return (
    <>
      <SidePage />
      
      <div className="profile_setup" id="profile_setup">
        <Signup handleCall={handleCallback} setspinner={setspinner} spinner={spinner}/>
       
        <Name getUserID={getUserID}setspinner={setspinner} spinner={spinner} />
        <Age getUserID={getUserID} setspinner={setspinner} spinner={spinner}/>
        <College getUserID={getUserID} setspinner={setspinner} spinner={spinner}/>
        <Hobby getUserID={getUserID} setspinner={setspinner} spinner={spinner}/>
        <Uploadphoto getUserID={getUserID} setspinner={setspinner} spinner={spinner}/>
        {/* <UploadId getUserID={getUserID}/> */}
      
        
      </div>
    </>
  );
}

export {context};