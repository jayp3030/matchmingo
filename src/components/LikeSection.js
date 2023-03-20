import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";


export default function LikeSection(props) {

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
  const fetch_data=async(userId)=> {

    const response = await fetch(`${host}/details/getUserById?id=${userId}`,{
      method:"get",
      headers: { "Content-Type": "application/json" }
    });
    const json = await response.json()
    props.setPersonalDT([json]);  
    console.log([json])
  }

  const getUserImagesById = async (userId) => {
    console.log(userId);
    const response = await fetch(`${host}/details/getUserImagebyId/${userId}`, {
      method: "GET",
    });
    const json = await response.json();
    console.log(json);
    props.setuserCardImgs(json);
  };

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
      {matches && matches.length!==0 ? <div className="likes">
        {userImgArr && userImgArr.map((img,index) => {
          return <div className="like_wrapper">
            <div className="img_card" onClick={()=>{
              fetch_data(matches[index])
              getUserImagesById(matches[index])
            }}>
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
      }
    </>
  );
}

