import React from "react";
import { useNavigate } from "react-router-dom";
import ImageUploading from "react-images-uploading"; 

export default function UploadId() {

    const Navigate = useNavigate();

  document.addEventListener('mousemove', function(event) { 
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
  }

  const handlebackwardSlide = (e) => {
    e.preventDefault();
    document.getElementById("profile_setup").style.transform =
      "translateX(-500vw)";
  };

  const [images, setImages] = React.useState([]);
  const maxNumber = 20;
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
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

            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
              acceptType={["jpg", "png"]}
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div
                  className="photo_section"
                  style={isDragging ? { color: "var(--light)" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <i class="fa-solid fa-image"></i>
                  <p>Click or Drop here</p>
                </div>
              )}
            </ImageUploading> 

            {/* <div className="suggestions">
              <p>
                <span> &#129488; </span> Minimum 2 Photos
              </p>
              <p>
                <span>&#129331; </span> Selfies Are Good
              </p>
              <p>
                <span>&#10060;</span> Avoid Group Photos
              </p>
            </div> */}
            <div className="middle">
              <button className="btn" id="testDiv" onClick={handleSubmit} >
                <button
                  className="circle"
                  id="circle"
                  onClick={blastCircle}
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
