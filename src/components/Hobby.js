import React from 'react'

export default function Hobby() {
  const handleSlide = (e)=>{
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-500vw)"
  }
  const handlebackwardSlide = (e)=>{
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-300vw)"
  }

  return (
    <>
       <div className="outer_signup" id='hobby'>
        <div className="col1" id="blurer">
        </div>
        <div className="col2">
          <div className="upper">
            <h2>Enter Your Hobbies</h2>
          </div>
          <div className="middle">
            <form action="">
              <input type="text" placeholder="Enter Your hobbies" />
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
