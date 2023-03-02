import React from 'react'


export default function Age(props) {

  const host = "http://localhost:8000"
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!document.getElementById("dob").value || !document.getElementById("gender").value || !document.getElementById("sexual_orientation").value) {
      document.getElementById("age_page_alert").style.opacity = 1;
      return;
    }

    const response = await fetch(`${host}/details/userDetails`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: props.getUserID(localStorage.getItem("token")).user.id,
        birth_date: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        sexual_orientation: document.getElementById("sexual_orientation").value,
      }),
    });
    if (response.ok) {
      document.getElementById("profile_setup").style.transform = "translateX(-300vw)"
    }
  }
  const handlebackwardSlide = (e) => {
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
            <h2>Enter Your Details</h2>
          </div>
          <div className="middle">
            <form action="">
              <h4>Enter your Birthday</h4>
              <input type="date" id='dob' placeholder="Enter Your age" />
              <h4>Select Gender</h4>
              <select name="gender" id='gender' className='gender'>
                <option value="" >Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <h4>Sexual Orientation</h4>
              <select name="sexual_orientation" id='sexual_orientation' className='gender'>
                <option value="" >Sexual Orientation</option>
                <option value="straight">Straight</option>
                <option value="gay">Gay</option>
                <option value="lesbian">Lesbian</option>
                <option value="bisexual">Bisexual</option>
              </select>
              <p className='alert' id="age_page_alert">Fill the required fields</p>
              <button className="btn" onClick={handleSubmit}>Next</button>
              <button className="btn_back" onClick={handlebackwardSlide}>Back</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
