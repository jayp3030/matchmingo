import React, { useState } from "react";
import axios from "axios";
import google from "../images/google.png";
import SidePresentation from "./SidePresentation";

export default function Signup() {
  const host = "http://localhost:8000";

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  // const handleSlide = (e) => {
  //   e.preventDefault()
  //   handleSubmit
  //   // document.getElementById("profile_setup").style.transform = "translateX(-100vw)"
  // }

  const handleOnChange = (e) => {
    
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("profile_setup").style.transform ="translateX(-100vw)";
    if (!credentials.email || !credentials.password || !credentials.cpassword) {
      document.getElementById("alert").style.opacity = 1;
      document.getElementById("alert").innerHTML = "Fill required fields";
      return;
    }
    if (credentials.password !== credentials.cpassword) {
      document.getElementById("alert").style.opacity = 1;
      document.getElementById("alert").innerHTML = "Password does not match";
      return;
    }
    const response = await fetch(`${host}/auth/createUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const json = await response.json();
    if (response.status === 409) {
      document.getElementById("alert").style.opacity = 1;
      document.getElementById("alert").innerHTML = "User already exist";
      return;
    }
    if (response.status === 201) {
      // document.getElementById("profile_setup").style.transform ="translateX(-100vw)"; 
    }
  };

  return (
    <>
      <div className="outer_signup" id="outer_signup">
        <div className="col1"></div>
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
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleOnChange}
                placeholder="Enter Your Email"
              />
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleOnChange}
                placeholder="Password"
              />
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                onChange={handleOnChange}
                placeholder="Confirm Password"
              />
              <p className="alert" id="alert">
                demo
              </p>
              <button className="btn" type="submit">
                Next
              </button>
            </form>
            <h5 className="last_child">
              Already Member? <a href="/login">Find Your Match</a>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
