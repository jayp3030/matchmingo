import React from 'react'


export default function College(props) {

  const host = "http://localhost:8000";

    const handleSubmit = async (e) => {
      e.preventDefault()

      if (!document.getElementById("college").value || !document.getElementById("branch").value || !document.getElementById("passout_year").value) {
        document.getElementById("college_page_alert").style.opacity = 1;
        return;
      }
      document.getElementById("profile_setup").style.transform = "translateX(-400vw)"
      const response = await fetch(`${host}/details/userDetails`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: props.getUserID(localStorage.getItem("token")).user.id,
          college: document.getElementById("college").value,
          branch: document.getElementById("branch").value,
          passout_year: document.getElementById("passout_year").value,

        }),
      });
      const json = await response.json();
    document.getElementById("profile_setup").style.transform = "translateX(-400vw)"
  }
  const handlebackwardSlide = (e) => {
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-200vw)"
  }

  return (
    <>
      <div className="outer_signup">
        <div className="col1" id="blurer">
        </div>
        <div className="col2">
          <div className="upper">
            <h2>College Details</h2>
          </div>
          <div className="middle">
            <h4>Select Your College</h4>
            <select name="college" className='college' id='college' required>
              <option value="" >College</option>
              <option value="VGEC">VGEC</option>
              <option value="LD Enngineering Collage">LD Enginnering Collage</option>
              <option value="Nirma University">Nirma University</option>
              <option value="Ahmedabad University">Ahmedabad University</option>
            </select>
            <h4>Select Branch</h4>
            <select name="collage" className='branch' id='branch'>
              <option value="" >Branch </option>
              <option value="Computer Enginnering ">Computer Enginnering </option>
              <option value="Information Technology ">Information Technology </option>
              <option value="Electrical Enginnering ">Electrical Enginnering </option>
              <option value="Electronic and Communication">Electronic and Communication</option>
            </select>
            <h4>Passout Year</h4>
            <select name="passout_year" id='passout_year' className='branch'>
              <option value="" >Passout Year </option>
              <option value="2024 ">2024 </option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>
            <p className='alert' id="college_page_alert">Enter Required Fields</p>
            <button className="btn" onClick={handleSubmit}>Next</button>
            <button className="btn_back" onClick={handlebackwardSlide}>Back</button>
          </div>
        </div>
      </div>
    </>
  )
}
