import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Hobby() {

  const [hobby, sethobby] = useState("")
  const [hobbyArr, setHobbyArr] = useState([])
  const handleSlide = (e) => {
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-500vw)"
  }
  const handlebackwardSlide = (e) => {
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-300vw)"
  }
  const addHobby =(e)=>{
    e.preventDefault()
    hobbyArr.push(document.getElementById("hobbyInput").value)
    setHobbyArr(hobbyArr)
    sethobby("")
  }
  const removeHobby=(e , index)=>{
    (hobbyArr.splice(e.target.parentNode.id.slice(-1),1));
    setHobbyArr([...hobbyArr])
  }
  const handleHobby=(e)=>{
    sethobby(e.target.value)
  }
  return (
    <>

      <div className="outer_signup" id='hobby'>

        <div className="col1" id="blurer">
        </div>
        <div className="col2">
          <div className="upper">
            <h2>Hobbies</h2>
          </div>
          <div className="middle">
            <form action="">
              <div className='hobbies_container'>
                <div className='hobby_input_div'>

                <input type="text" name='hobby' id='hobbyInput' value={hobby} onChange={handleHobby} placeholder="Enter Your hobbies"/>
                  <button className='empty_btn' onClick={addHobby}><i class="fa-solid fa-circle-plus"></i></button>
                </div>
                <div className='hobbyArrayDiv' id='hobbyArrayDiv'>
                  {hobbyArr && hobbyArr.map((element,index)=>{
                    return <span class="hobbyArray" id={`hobby${index}`}>{element}<i class="fa-solid fa-square-xmark" onClick={removeHobby}></i></span>
                  })}
                  
                </div>
              </div>
              <input type="text" placeholder="Bio (optional )" />

              <button className="btn" onClick={handleSlide} >Next</button>
              <button className="btn_back" onClick={handlebackwardSlide} >Back</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}



