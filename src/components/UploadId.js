import React, { useEffect, useRef, useState } from "react";
// import ImageUploading from "react-images-uploading";
import upldImg from "../images/uploadPhoto.png";
import jwt_decode from "jwt-decode";
import img from "../images/landingPage03.jpg"

export default function Uploadphoto() {
  const [idImages, setidImages] = useState([])
  const host = process.env.REACT_APP_BASEURL
  const [userId, setuserId] = useState();

  const btnRef2 = useRef(null);

  const handleSlide = (e) => {
    e.preventDefault();
    console.log('clicked2');
    btnRef2.current.click();
  };

  const handlebackwardSlide = (e) => {
    e.preventDefault();
    var name=document.getElementsByClassName("outer_signup");
    Array.prototype.forEach.call(name,(element) => {
      element.style.transform="translateX(-500vw)";
      element.style.transition="1s";
    });
    // document.getElementById("profile_setup").style.transform =
    //   "translateX(-500vw)";
  };

  const handleFileChange2 = (e) => {
    if (e.target.files[0].type.split('/')[0] !== "image" ) {
      return;
    }
    setidImages(idImages => [...idImages, e.target.files[0]])
    
  };

  useEffect(() => {
    setInterval(() => {
      localStorage.getItem("token") &&
        setuserId(jwt_decode(localStorage.getItem("token")).user.id);
    }, 5000);
    // buttonToggle()
  }, [idImages]);

  const handleUploadPhoto = async (e) => {
    e.preventDefault()
    console.log('clicked');
    // Create a new FormData object
    const formData = new FormData();
    // Add each file from the file input to the FormData object
    for (let i = 0; i < idImages.length; i++) {
      formData.append('images', idImages[i]);
    }

    const response = await fetch(`${host}/details/userImages?id=idCard${jwt_decode(localStorage.getItem("token")).user.id}`, {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    console.log(json)
  }

  return (
    <>
      {localStorage.getItem("token") && (
        <div className="outer_signup" id="outer_signup">
          <div className="col1"></div>
          <div className="col2">
            <div className="upper">
              <h2>Upload Your Photos</h2>
            </div>
            {console.log(idImages)}
            <div className="photo_section">
              <div className="id_section_left">
                <img src={idImages[0] && URL.createObjectURL(idImages[0])} alt="" />
              </div>
            </div>
            <form
              className="photo_section_dummy"
              id="myForm2"
            >
              <label htmlFor="input-files2">
                <img src={upldImg} alt="files" />
                Click Here To Select Photo
                <input
                  type="file"
                  name="images"
                  id="input-files2"
                  onChange={handleFileChange2}
                  multiple
                  accept="image/*"
                />
              </label>
              <button ref={btnRef2} onClick={handleUploadPhoto} className="btn_dnone">
                submit
              </button>
            </form>
            <div className="middle">
              <button className="btn" id="uploadPageBtn" onClick={handleSlide}>
                Upload
              </button>
              <button className="btn_back" onClick={handlebackwardSlide}>
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )

      }