import React, { useEffect, useRef, useState } from "react";
// import ImageUploading from "react-images-uploading";
import upldImg from "../images/uploadPhoto.png";
import jwt_decode from "jwt-decode";

export default function Uploadphoto() {

  let files = [];
  const [userId, setuserId] = useState()

  const btnRef = useRef(null);

  // const buttonToggle = () => {
  //   if (images.length < 2) {
  //     document.getElementById("uploadPageBtn").disabled = true;
  //   } else {
  //     document.getElementById("uploadPageBtn").disabled = false;
  //   }
  // };

  const handleSlide = (e) => {
    e.preventDefault();
    btnRef.current.click();
    document.getElementById("profile_setup").style.transform =
      "translateX(-600vw)";
  };

  const handlebackwardSlide = (e) => {
    e.preventDefault();
    document.getElementById("profile_setup").style.transform =
      "translateX(-400vw)";
  };

  // const [images, setImages] = React.useState([]);
  // const maxNumber = 20;
  // const onChange = (imageList, addUpdateIndex) => {
  //   buttonToggle();
  //   setImages(imageList);
  // };
  const handleFileChange = (e) => {
    console.log(e.target.files)
  }

  useEffect(() => {
    setInterval(() => {
      localStorage.getItem("token") && setuserId(jwt_decode(localStorage.getItem("token")).user.id)
    }, 5000);
  });

  //testing //

  function submitForm(event) {
    event.preventDefault(); // prevent the default form submission behavior
    // do any form validation or processing here
    // use AJAX to submit the form data to the backend URL
    // for example:
    var xhr = new XMLHttpRequest();
    xhr.open('POST', `http://localhost:8000/details/userImages?id=${jwt_decode(localStorage.getItem("token")).user.id}`);
    xhr.onload = function () {
      // handle the response from the server
    };
    xhr.send(new FormData(document.getElementById('myForm')));
  }

  return (
    <>
      {localStorage.getItem("token") && <div className="outer_signup" id="outer_signup">
        <div className="col1"></div>
        <div className="col2">
          <div className="upper">
            <h2>Upload Your Photos</h2>
          </div>
          <form
            className="photo_section"
            action={`http://localhost:8000/details/userImages?id=${jwt_decode(localStorage.getItem("token")).user.id}`}
            method="post"
            name="images"
            encType="multipart/form-data"
            id="myForm"
          >
            <label
              htmlFor="input-files">
              <img src={upldImg} alt="files" /> <br />
              Click Here To Select Photo
              <input
                type="file"
                name="images"
                id="input-files"
                multiple
                onChange={handleFileChange}
              />
            </label>
            {/* <div className="image_wrapper">
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image.data_url} alt="" width="130" />
                    </div>
                  ))}
                </div> */}
            <button ref={btnRef} onClick={submitForm} className='btn_dnone'>submit</button>
          </form>
          {/* )} */}
          {/* </ImageUploading> */}

          <div className="suggestions">
            <p>
              <span> &#129488; </span> Minimum 2 Photos
            </p>
            <p>
              <span>&#129331; </span> Selfies Are Good
            </p>
            <p>
              <span>&#10060;</span> Avoid Group Photos
            </p>
          </div>
          <div className="middle">
            <button className="btn" id="uploadPageBtn" onClick={handleSlide}>
              Upload
            </button>
            <button className="btn_back" onClick={handlebackwardSlide}>
              Back
            </button>
          </div>
        </div>
      </div>}
    </>
  );
}
