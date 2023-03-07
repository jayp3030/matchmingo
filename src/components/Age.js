import React, { useState } from "react";
import Select from "react-select";

export default function Age(props) {
  const host = "http://localhost:8000";
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!document.getElementById("dob").value || !selectedOptionGender.value || !selectedOptionOrientation.value) {
    //   console.log();
    //   document.getElementById("age_page_alert").style.opacity = 1;
    //   return;
    // }

    const response = await fetch(`${host}/details/userDetails`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: props.getUserID(localStorage.getItem("token")).user.id,
        birth_date: document.getElementById("dob").value,
        gender: selectedOptionGender.value,
        sexual_orientation: selectedOptionOrientation.value ,
      }),
    });
    if (response.ok) {
    document.getElementById("profile_setup").style.transform =
      "translateX(-300vw)";
    }
  };
  const handlebackwardSlide = (e) => {
    e.preventDefault();
    document.getElementById("profile_setup").style.transform =
      "translateX(-100vw)";
  };



  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const sexual_Orientation = [
    { value: "Straight", label: "Straight" },
    { value: "Lesbian", label: "Lesbian" },
    { value: "Gay", label: "gay" },
    { value: "Other", label: "Other" },
  ]

  const [selectedOptionGender, setSelectedOptionGender] = useState(null);
  const [selectedOptionOrientation, setSelectedOptionOriantation] = useState(null);

  const handleGender =(e)=>{
    console.log(e.value)
    setSelectedOptionGender(e.value);
    console.log(selectedOptionGender)
  }
  const handleOrientation =(e)=>{
    setSelectedOptionOriantation(e.value);
  }

  return (
    <>
      <div className="outer_signup" id="age">
        <div className="col1" id="blurer"></div>
        <div className="col2">
          <div className="upper">
            <h2>Enter Your Details</h2>
          </div>
          <div className="middle">
            <form action="">
              <h4>Enter your Birthday</h4>
              <input type="date" id="dob" placeholder="Enter Your age" />
              <h4>Select Gender</h4>
              <Select
                id="gender"
                className="gender"
                // defaultValue={selectedOption}
                options={gender}
                onChange={handleGender}
                value="hello"
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
              <h4>Sexual Orientation</h4>
              <Select
                id="sexual_orientation"
                className="gender"
                // defaultValue={selectedOption}
                onChange={handleOrientation}
                options={sexual_Orientation}
                value="hello"
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
              <p className="alert" id="age_page_alert">
                Fill the required fields
              </p>
              <button className="btn" onClick={handleSubmit}>
                Next
              </button>
              <button className="btn_back" onClick={handlebackwardSlide}>
                Back
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
