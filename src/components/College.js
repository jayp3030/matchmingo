import React, { useState } from 'react'
import Select from "react-select";


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

  const collage = [
    { value: "LD Engineering collage", label: "LD Engineering collage" },
    { value: "VGEC", label: "VGEC" },
    { value: "NIRMA University", label: "NIRMA University" },
    { value: "Parul University", label: "Parul University" },
    { value: "CVM University", label: "CVM University" },
    { value: "MS University", label: "MS University" },
  ]

  const branch = [
    { value: "Computer Engineering", label: "Computer Engineering" },
    { value: "Information Technology", label: "Information Technology" },
    { value: "Electrical & Communication", label: "Electrical & Communication" },
    { value: "Electrical Engineering", label: "Electrical Engineering" },
    { value: "Chemical Engineering", label: "Chemical Engineering" },
  ]

  const passout_year = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
    { value: "2028", label: "2028" },
    { value: "2029", label: "2029" },

  ]

  const [selectedOption, setSelectedOption] = useState(null);

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
            <Select
                className="gender"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={collage}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'white' : 'grey',
                    border: state.isFocused ? 0 : 0,
                    boxShadow: "none"
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "white",
                    primary: "var(--light)",
                    neutral80: "black",
                  },
                })}
              />
            <h4>Select Branch</h4>
            <Select
                className="gender"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={branch}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'white' : 'grey',
                    border: state.isFocused ? 0 : 0,
                    boxShadow: "none"
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "white",
                    primary: "var(--light)",
                    neutral80: "black",
                  },
                })}
              />
            <h4>Passout Year</h4>
            <Select
                className="gender"
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={passout_year}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'white' : 'grey',
                    border: state.isFocused ? 0 : 0,
                    boxShadow: "none"
                  }),
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "white",
                    primary: "var(--light)",
                    neutral80: "black",
                  },
                })}
              />
            <p className='alert' id="college_page_alert">Enter Required Fields</p>
            <button className="btn" onClick={handleSubmit}>Next</button>
            <button className="btn_back" onClick={handlebackwardSlide}>Back</button>
          </div>
        </div>
      </div>
    </>
  )
}
