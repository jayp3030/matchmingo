import React, { useState } from 'react'
import Select from "react-select";


export default function College(props) {

  const host = "http://localhost:8000";

    const handleSubmit = async (e) => {
      e.preventDefault()

      if (!selectedOptionCollege.value || !selectedOptionBranch.value || !selectedOptionPassYear.value) {
        document.getElementById("college_page_alert").style.opacity = 1;
        return;
      }
      document.getElementById("profile_setup").style.transform = "translateX(-400vw)"
      const response = await fetch(`${host}/details/userDetails`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: props.getUserID(localStorage.getItem("token")).user.id,
          college: selectedOptionCollege.value,
          branch: selectedOptionBranch.value,
          passout_year: selectedOptionPassYear.value,

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

  
  const [selectedOptionCollege, setSelectedOptionCollege] = useState(null);
  const [selectedOptionBranch, setSelectedOptionBranch] = useState(null);
  const [selectedOptionPassYear, setSelectedOptionPassYear] = useState(null);

  const handleCollege = (selectedCollege) =>{
    console.log(selectedCollege.value);
    setSelectedOptionCollege(selectedCollege);
  }
  const handleBranch = (selectedBranch) =>{
    console.log(selectedBranch.value);
    setSelectedOptionBranch(selectedBranch);
  }
  const handleCPassYear = (selectedPassYear) =>{
    console.log(selectedPassYear.value);
    setSelectedOptionPassYear(selectedPassYear);
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
            <Select
                className="gender"
                // defaultValue={selectedOption}
                onChange={handleCollege}
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
                // defaultValue={selectedOption}
                onChange={handleBranch}
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
                // defaultValue={selectedOption}
                onChange={handleCPassYear}
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
