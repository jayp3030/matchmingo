import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import ImageUploading from "react-images-uploading"; 
import upldImg from '../images/uploadPhoto.png'

export default function UploadId() {

    const Navigate = useNavigate();
    const btnRef = useRef(null);

    document.getElementById('testDiv') &&document.addEventListener('mousemove', function(event) { 
    var rect = document.getElementById('testDiv').getBoundingClientRect(); 
    var x = event.clientX - rect.left; 
    var y = event.clientY - rect.top; 

     
    if(x>0 && x<320 && y>0 && y<40 ){
        document.getElementById("circle").style.display = "block" 
        document.getElementById("circle").style.top = y + "px";
        document.getElementById("circle").style.left = x + "px";
    }
      else{
        document.getElementById("circle").style.display = "none" 
      }
      
  }); 
  const blastCircle=(e)=>{
    e.preventDefault()
    document.getElementById("circle").style.backgroundColor = "#2EC4B6"

    setTimeout(() => {
      Navigate("/verified")
    }, 1000);
    
    document.getElementById("circle").style.transform = "scale(100)"
    document.getElementById("circle").style.transition = "all 1s ease-out"
    document.getElementById("sidebar_wrapper").style.opacity = 0 
    document.getElementById("matchmingoText").style.opacity = 0 
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    btnRef.current.click();
    console.log(document.getElementById("input-files2"));

  }

  const handlebackwardSlide = (e) => {
    e.preventDefault();
    document.getElementById("profile_setup").style.transform = "translateX(-500vw)";
  };

  return (
    <>
      <>
        <div className="outer_signup" id="outer_signup">
          <div className="col1"></div>
          <div className="col2">
            <div className="upper">
              <h2>Upload Your ID</h2>
            </div>
            <form
                className="photo_section"
                action = 'http://localhost:8000/details/userImages'
                method="post"
                enctype="multipart/form-data"
              >
                <label 
                htmlFor="input-files2">
                  <img src={upldImg} alt="files" /> <br />
                  Click Here To Select Photo
                <input
                type="file"
                name="image"
                id="input-files2"
              />
                </label>
                <button ref={btnRef} className='btn_dnone'>submit</button>
              </form>

            <div className="middle">
              <button className="btn" id="testDiv" onClick={handleSubmit} >
                <button
                  className="circle"
                  id="circle"
                  // onClick={blastCircle}
                ></button>
                <span>Upload</span>
              </button>
              <button className="btn_back" onClick={handlebackwardSlide}>
                Back
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
