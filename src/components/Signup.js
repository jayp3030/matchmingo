import React from "react";
import google from "../images/google.png";
import SidePresentation from "./SidePresentation";


export default function Signup() {

  const handleSlide = (e)=>{
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-100vw)" 
  }
  
  return (
    <>
      <div className="outer_signup" id="outer_signup">
        <div className="col1">
          
  
        </div>
        <div className="col2">
          <div className="upper">
            <h2>Become a Mingo Member</h2>
            <button className="google_btn">
              <div className="google_logo">
                <img src={google} alt="google" />
              </div>
              <div>Signup With Google</div>
            </button>
            <p>OR</p>
          </div>
          <div className="middle">
            <form action="">
              <input type="email" placeholder="Enter Your Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button className="btn" onClick={handleSlide}>Next</button>
            </form>
            <h5 className="last_child">
              Already Member? <a href="/">Find Your Match</a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

// setInterval(() => {
//   var a = document.getElementById("");
  
//   var y = Math.random() * 100;

//   var z = y + "px";
//   // console.log(z);
//   a.style.backgroundPositionY = y + "px";
//   a.style.transitionDuration = "2s";
// }, 500);