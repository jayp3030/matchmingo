import React from 'react'


export default function Name() {

    const handleSlide = (e)=>{
        e.preventDefault()
        document.getElementById("profile_setup").style.transform = "translateX(-200vw)"
      }
    const handlebackwardSlide = (e)=>{
        e.preventDefault()
        document.getElementById("profile_setup").style.transform = "translateX(0vw)"
        // console.log(document.getElementById("profile_setup"))
      }
      
  return (
    <>
       <div className="outer_signup" id='name'>
        <div className="col1" id="blurer">
        </div>
        <div className="col2">
          <div className="upper">
            <h2>Enter Your Name</h2>
          </div>
          <div className="middle">
            <form action="">
              <input type="text" placeholder="Enter First Name" />
              <input type="text" placeholder="Enter Last Name" />
              <button className="btn" onClick={handleSlide}>Next</button>
              <button className="btn_back" onClick={handlebackwardSlide}>Back</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
