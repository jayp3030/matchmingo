import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import img1 from "../images/285660_picture_image_pic_icon 1.png";
import img2 from "../images/favorite.png";
import img3 from "../images/icons8-messages-500 1.png";
import img4 from "../images/1167993_cog_cogwheel_configuration_parameters_properties_icon 1.png";
import img5 from "../images/landingPage05.jpg";

export default function LikeSectionMobile() {

  const host =process.env.REACT_APP_BASEURL
  const [matches, setMatches] = useState()
  const [userImgArr, setUserImgArr] = useState()


  const fetchMatches = async () => {
    if (!localStorage.getItem("token")) {
      return
    }
    const response = await fetch(`${host}/match/fetchMatch?id=${jwt_decode(localStorage.getItem("token")).user.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
    const json = await response.json()
    setMatches(json)
  }
  const getUserImages = async () => {

    const response = await fetch(`${host}/details/getUserImageArr`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        userArray: matches
      })
    });
    const json = await response.json();
    setUserImgArr(json)
  }

  useEffect(() => {
    fetchMatches()
  }, [])

  useEffect(() => {
    if (matches) {
      getUserImages()
    }
  }, [matches])

  return (
    <>
    {console.log(userImgArr)}
    <div className="LikeSectionMobile_container">
        <div className="upper_part">
            {/* copy paste your code here for showing likes  */}
            <p>this is the part where you can integrate your code for like</p>

        </div>
        <div className="footer_mobile fcc">
            <div className="footer_mobile_container">
             
              <div className="footer_logos fcc">
                <img src={img1}></img>
              </div>
            
              
              <div  className="footer_logos fcc">
              <a href={"./like"}>
              <img src={img2}></img>
              </a>
              </div>
              
              
              
              <div  className="footer_logos fcc">
              <a href={"./chat"}>
              <img src={img3}></img>
              </a>
              
              </div>
              
              <div  className="footer_logos fcc">
              <img src={img4}></img>
              </div>
            </div>
        </div>

    </div>
      {/* {matches && matches.length!==0 ? <div className="likes">
        {userImgArr && userImgArr.map((img) => {
          return <div className="like_wrapper">
            <div className="img_card">
              <img src={`data:image/jpeg;base64,${img && img.data
                }`} alt="" />
            </div>
          </div>
        })}
      </div>
        : <div className="likes">
          <div className="notMatched">
            <h2>
              No Match Available...
            </h2>
          </div>
        </div>
      } */}
    </>
  );
}

