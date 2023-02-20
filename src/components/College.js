import React from 'react'
import matchmingo from "../images/MatchMingo.png";

export default function College() {
  const handleSlide = (e)=>{
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-400vw)"
  }

  return (
    <>
       <div className="outer_signup" id='college'>
        <div className="col1" id="blurer">
          {/* <img src={matchmingo} alt='MatchMingo' /> */}
        </div>
        <div className="col2">
          <div className="upper">
            <h2>Enter Your Collage</h2>
          </div>
          <div className="middle">
              <select name="collage" className='collage' onchange="this.nextElementSibling.value=this.value" required>
                <option value="VGEC">VGEC</option>
                <option value="LD Enngineering Collage">LD Enginnering Collage</option>
                <option value="Nirma University">Nirma University</option>
                <option value="Ahmedabad University">Ahmedabad University</option>
              </select>
              <select name="collage" className='branch'>
                <option value="Computer Enginnering ">Computer Enginnering </option>
                <option value="Information Technology ">Information Technology </option>
                <option value="Electrical Enginnering ">Electrical Enginnering </option>
                <option value="Electronic and Communication">Electronic and Communication</option>
              </select>

              <button className="btn" onClick={handleSlide}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}
