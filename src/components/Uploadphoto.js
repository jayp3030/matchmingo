
import React, { useEffect, useRef, useState } from "react";
import upldImg from "../images/uploadPhoto.png";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function Uploadphoto() {
  const [images, setimages] = useState([])
  const host = process.env.REACT_APP_BASEURL
  const [userId, setuserId] = useState();
  const Navigate = useNavigate();

  const btnRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(images.length<3){
      return
    }
    updateUserInfoStatus()
    
  };
  const updateUserInfoStatus = async()=>{
    const response = await fetch(`${host}/auth/userAuthCompleted`,{
      method:"post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "userId":jwt_decode(localStorage.getItem("token")).user.id
      })
    }).then(handleUploadPhoto())
  }

  const handlebackwardSlide = (e) => {
    e.preventDefault();
    var name=document.getElementsByClassName("outer_signup");
    Array.prototype.forEach.call(name,(element) => {
      element.style.transform="translateX(-400vw)";
      element.style.transition="1s";
    });
    // document.getElementById("profile_setup").style.transform =
    //   "translateX(-400vw)";
  };

  const handleFileChange = (e) => {
    setimages(images => [...images, e.target.files[0]])
  };

  useEffect(() => {
    setInterval(() => {
      localStorage.getItem("token") &&
        setuserId(jwt_decode(localStorage.getItem("token")).user.id);
    }, 5000);
    buttonToggle()
  }, [images]);


  const buttonToggle = () => {
    if(document.getElementById("uploadPageBtn")){

      if (images.length < 2) {
        document.getElementById("uploadPageBtn").disabled = true;
      } else {
        document.getElementById("uploadPageBtn").disabled = false;
      }
    }
  };
  const handleUploadPhoto = async () => {
    // Create a new FormData object
    const formData = new FormData();

    // Add each file from the file input to the FormData object
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    const response = await fetch(`${host}/details/userImages?id=${jwt_decode(localStorage.getItem("token")).user.id}`, {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    blastCircle()
  }

  document.getElementById('uploadPageBtn') &&document.addEventListener('mousemove', function(event) { 
    if(document.getElementById('uploadPageBtn')){

      var rect = document.getElementById('uploadPageBtn').getBoundingClientRect(); 
      var x = event.clientX - rect.left; 
      var y = event.clientY - rect.top; 
    }

   if(document.getElementById("circle")){
    if(x>0 && x<320 && y>0 && y<40){
      document.getElementById("circle").style.display = "block" 
      document.getElementById("circle").style.top = y + "px";
      document.getElementById("circle").style.left = x + "px";
  }
    else{
      document.getElementById("circle").style.display = "none" 
    }
   }
 
    
}); 
const blastCircle=()=>{
  document.getElementById("circle").style.backgroundColor = "#2EC4B6"

  setTimeout(() => {
    Navigate("/home")
  }, 2000);
  
  document.getElementById("circle").style.transform = "scale(100)"
  document.getElementById("circle").style.transition = "all 1s ease-out"
  document.getElementById("sidebar_wrapper").style.opacity = 0 
  document.getElementById("matchmingoText").style.opacity = 0 
  
}


  return (
    <>
    {console.log(images)}
      {localStorage.getItem("token") && (
        <div className="outer_signup" id="outer_signup">
          <div className="col1"></div>
          <div className="col2">
            <div className="upper">
              <h2>Upload Your Photos</h2>
            </div>
            <div className="photo_section">
              <div className="photo_section_left">
                <img src={images[0] && URL.createObjectURL(images[0])} alt="" />
              </div>
              <div className="photo_section_right">
                <div className="photo_section_box">
                  <div className="inner_box">
                    <img src={images[1] && URL.createObjectURL(images[1])} alt="" />
                  </div>
                  <div className="inner_box">
                    <img src={images[2] && URL.createObjectURL(images[2])} alt="" />
                  </div>
                </div>
                <div className="photo_section_box">
                  <div className="inner_box">
                    <img src={images[3] && URL.createObjectURL(images[3])} alt="" />
                  </div>
                  <div className="inner_box">
                    <img src={images[4] && URL.createObjectURL(images[4])} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <form
              className="photo_section_dummy"
              action={`http://localhost:8000/details/userImages?id=${jwt_decode(localStorage.getItem("token")).user.id
                }`}
              method="post"
              encType="multipart/form-data"
              id="myForm"
            >
              <label htmlFor="input-files">
                <img src={upldImg} alt="files" />
                Click Here To Select Photo
                <input
                  type="file"
                  name="images"
                  id="input-files"
                  onChange={handleFileChange}
                  multiple
                />
              </label>
              <button className="btn_dnone">
                submit
              </button>
            </form>

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
            <button className="btn"  {...images.length<3?"disabled":""} id="uploadPageBtn" onClick={ handleSubmit} >
                <button
                  className="circle"
                  id="circle"
                ></button>
                Upload
              </button>
              <button className="btn_back"  onClick={handlebackwardSlide}>
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


// const [images, setImages] = React.useState([]);
// const maxNumber = 20;
// const onChange = (imageList, addUpdateIndex) => {
//   buttonToggle();
//   setImages(imageList);
// };

//  {/* <ImageUploading
//       multiple
//       value={images}
//       onChange={onChange}
//       maxNumber={maxNumber}
//       dataURLKey="data_url"
//       acceptType={["jpg", "png"]}
//     >
//       {({
//         imageList,
//         onImageUpload,
//         onImageRemoveAll,
//         onImageUpdate,
//         onImageRemove,
//         isDragging,
//         dragProps,
//       }) => ( */}

//  {/* <div className="image_wrapper">
//           {imageList.map((image, index) => (
//             <div key={index} className="image-item">
//               <img src={image.data_url} alt="" width="130" />
//             </div>
//           ))}
//         </div> */}

//  {/* )} */}
// {/* </ImageUploading> */}
