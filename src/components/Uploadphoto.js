import React, { useEffect, useRef, useState } from "react";
// import ImageUploading from "react-images-uploading";
import upldImg from "../images/uploadPhoto.png";
import jwt_decode from "jwt-decode";
import img from "../images/landingPage03.jpg"

export default function Uploadphoto() {
  const [images, setimages] = useState([])
  const host = process.env.REACT_APP_BASEURL
  const [userId, setuserId] = useState();

  const btnRef = useRef(null);

  const handleSlide = (e) => {
    e.preventDefault();
    btnRef.current.click();
    var name=document.getElementsByClassName("outer_signup");
      Array.prototype.forEach.call(name,(element) => {
        element.style.transform="translateX(-600vw)";
        element.style.transition="1s";
      });
    // document.getElementById("profile_setup").style.transform =
    //   "translateX(-600vw)";
  };

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
  const handleUploadPhoto = async (e) => {
    e.preventDefault()
    // Create a new FormData object
    const formData = new FormData();

    // Add each file from the file input to the FormData object
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    console.log(images)
    const response = await fetch(`${host}/details/userImages?id=${jwt_decode(localStorage.getItem("token")).user.id}`, {
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
              <button ref={btnRef} onClick={handleUploadPhoto} className="btn_dnone">
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
