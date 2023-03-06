import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Hobby(props) {

  const host = "http://localhost:8000"
  const [hobby, sethobby] = useState("")
  const [hobbyArr, setHobbyArr] = useState([])
  const [bio, setbio] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(hobbyArr.length===0){
      document.getElementById("hobby_page_alert").style.opacity = 1;
      return
    }
    
    const response = await fetch(`${host}/details/userDetails`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: props.getUserID(localStorage.getItem("token")).user.id,
        hobbies:hobbyArr,
        bio:bio
      }),
    });
    if(response.ok){
      document.getElementById("profile_setup").style.transform = "translateX(-500vw)"
    }
    
  }
  const handlebackwardSlide = (e) => {
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-300vw)"
  }
  const addHobby = (e) => {
    e.preventDefault()
    if (document.getElementById("hobbyInput").value) {
      if(hobbyArr.length===5){
        // for showing alert if user tries to add more than 5 skills
        document.getElementById("hobby_limit_alert").style.display = "block"
        document.getElementById("hobby_limit_alert").style.opacity = 1;
        return;
      }
      hobbyArr.push(document.getElementById("hobbyInput").value)
      setHobbyArr(hobbyArr)
      sethobby("")
    }

  }
  const removeHobby = (e, index) => {
    (hobbyArr.splice(e.target.parentNode.id.slice(-1), 1));
    setHobbyArr([...hobbyArr])
  }
  const handleHobby = (e) => {
    sethobby(e.target.value)
  }

  const handleOnChange=(e)=>{
    setbio(e.target.value)
  }
  return (
    <>

      <div className="outer_signup" id='hobby'>

        <div className="col1" id="blurer">
        </div>
        <div className="col2">
          <div className="upper">
            <h2>More About You</h2>
          </div>
          <div className="middle">
            <form action="">
              <h4>Enter Your Hobbies</h4>
              <p className='alert dnone' id="hobby_limit_alert">Maximum 5 hobbies allowed</p>
              <div className='hobbies_container'>
                <div className='hobby_input_div'>
                  

                  <input type="text" name='hobby' id='hobbyInput' value={hobby} onChange={handleHobby} placeholder="Enter Your hobbies" />
                  <button className='empty_btn' onClick={addHobby}><i className="fa-solid fa-circle-plus"></i></button>
                </div>
                <div className='hobbyArrayDiv' id='hobbyArrayDiv'>
                  {hobbyArr && hobbyArr.map((element, index) => {
                    return <span className="hobbyArray" id={`hobby${index}`}>{element}<i className="fa-solid fa-square-xmark" onClick={removeHobby}></i></span>
                  })}

                </div>
              </div>
              <h4>Describe Yourself</h4>
              <textarea type="text" id='bio' name='bio' value={bio} onChange={handleOnChange} className='bioInput' placeholder="Bio (optional )" />
                  <p className='alert' id='hobby_page_alert'>Please enter atleast 1 hobby</p>
              <button className="btn" onClick={handleSubmit} >Next</button>
              <button className="btn_back" onClick={handlebackwardSlide} >Back</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}



