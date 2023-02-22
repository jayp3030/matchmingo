import React from "react";

export default function Uploadphoto() {

    const handlebackwardSlide = (e)=>{
        e.preventDefault()
        document.getElementById("profile_setup").style.transform = "translateX(-400vw)"
      }
  return (
    <>
      <div className="outer_signup" id="outer_signup">
        <div className="col1"></div>
        <div className="col2">
          <div className="upper">
            <h2>Upload Some Photos</h2>
          </div>
          <div className="photo_section">
          <i class="fa-solid fa-image"></i>
          </div>
          <div className="suggestions">
             <p><span>	&#129488; </span> Minimum 2 Photos</p>
             <p><span>&#129331; </span> Selfies Are Good</p>
             <p><span>&#10060;</span> Avoid Group Photos</p>
          </div>
          <div className="middle">
            <button className="btn">Upload</button>
            <button className="btn_back" onClick={handlebackwardSlide}>Back</button>
          </div>
        </div>
      </div>
    </>
  );
}
