import React from "react";
import google from '../images/google.png'
import matchmingo from '../images/MatchMingo.png'


export default function Signup() {
  return (
    <>
      <div className="outer_signup">
        <div className="col1">
          <img src={matchmingo} alt="MatchMingo" />
        </div>
        <div className="col2">
          <div className="upper">
                <h2>Become a Mingo Member</h2>
                <button className="google_btn">
                    <div className="google_logo"><img src={google} alt="google" /></div>
                    <div>Signup With Google</div>
                </button>
                <p>OR</p>
          </div>
          <form action="">
            <input type="email" placeholder="Enter Your Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="btn">Next</button>
          </form>
          <h5 className="last_child">Already Member? <a href="/">Find Your Match</a></h5>
        </div>
      </div>
    </>
  );
}