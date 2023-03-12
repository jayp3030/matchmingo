import React, { useEffect,useState } from "react";
import jwt_decode from "jwt-decode";


export default function LikeSection() {

  const host = "http://localhost:8000"
  const[matches,setMatches] = useState()
  const[userImgArr,setUserImgArr] = useState()
  

  const fetchMatches=async()=>{
    if(!localStorage.getItem("token")){
      return
    }
    const response = await fetch(`${host}/match/fetchMatch?id=${jwt_decode(localStorage.getItem("token")).user.id}`,{
      method : "GET",
      headers: { "Content-Type": "application/json" }
    })
    const json = await response.json()
    setMatches(json)
  }
  const getUserImages = async()=>{
    console.log(matches)

    const response = await fetch(`${host}/details/getUserImageArr`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      
      body:JSON.stringify({
        userArray:matches
      })
    });
    const json = await response.json();
    setUserImgArr(json)
  }

  useEffect(()=>{
    fetchMatches()
  },[])

  useEffect(()=>{
    if(matches){

      getUserImages()
    }
  },[matches])
  
  return (
    <>
      <div className="likes">
        {userImgArr && userImgArr.map((img)=>{
          return <div className="like_wrapper">
          <div className="img_card">
            <img src={`data:image/jpeg;base64,${
                  img && img.data
                }`} alt="" />
          </div>
          <p>abc</p>
        </div>
        }) }
       
      </div>
    </>
  );
}
