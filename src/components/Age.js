import React from 'react'


export default function Age() {
  const handleSlide = (e)=>{
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-300vw)"
  }
  const handlebackwardSlide = (e)=>{
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-100vw)"
  }
  return (
    <>
       <div className="outer_signup" id='age'>
        <div className="col1" id="blurer">
        </div>
        <div className="col2">
          <div className="upper">
            <h2>Enter Your Age</h2>
          </div>
          <div className="middle">
            <form action="">
              <input type="date" placeholder="Enter Your age" />
              <select name="gender" className='gender'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <select name="gender" className='gender'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Straight">Straight</option>
                <option value="Gay">Gay</option>
                <option value="Lesbian">Lesbian</option>
              </select>
              <button className="btn" onClick={handleSlide}>Next</button>
              <button className="btn_back" onClick={handlebackwardSlide}>Back</button>
            </form>
          </div>
        </div>
      </div>  
    </>
  )
}
