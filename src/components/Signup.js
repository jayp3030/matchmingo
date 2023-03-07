import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../images/google.png";


export default function Signup() {

  const Navigate = useNavigate();
  const host = "http://localhost:8000";
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const handleOnChange = (e) => {

    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password || !credentials.cpassword) {
      document.getElementById("profile_setup").style.transform ="translateX(-100vw)"; 
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
    if (json.success) {
      localStorage.setItem("token",json.token)
      document.getElementById("profile_setup").style.transform ="translateX(-100vw)"; 
    }
  };

  const changeMode = ()=>{
    if(localStorage.getItem("mode")){
      console.log(localStorage.getItem("mode"))
      if(localStorage.getItem("mode")==="light"){
        console.log("hello")
        localStorage.setItem("mode","dark")
        window.location.reload()
        return
      }
      else{
        localStorage.setItem("mode","light")
        window.location.reload()
        return
      }
    }
    localStorage.setItem("mode","light")
  }


  useEffect(()=>{
    //if user is logged in then redirect to home page
    if(localStorage.getItem("token")){
      Navigate("/home")
    }
  },[])

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
            <div className="modes">
                <button onClick={changeMode}>dark mode</button>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}
