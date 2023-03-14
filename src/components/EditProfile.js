import React, { useEffect, useState } from "react";
import Select from "react-select";

export default function EditProfile() {
  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const sexual_Orientation = [
    { value: "Straigh", label: "Straigh" },
    { value: "Lesbian", label: "Lesbian" },
    { value: "Gay", label: "gay" },
    { value: "Other", label: "Other" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const host = process.env.REACT_APP_BASEURL

  const [fetchedData, setFetchedData] = useState([]);

  async function fetchData() {
    const response = await fetch(`${host}/details/getUserDetails`)
      .then((res) => res.json())
      .then((result) => setFetchedData(result))
      .catch((err) => console.log(err));
  }

  async function updateProfile(e) {
    e.preventDefault();
    console.log("clicked");

    let response = await fetch(`${host}/details/userDetails`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fetchedData),
    });
  }

  const handlOnChange = (e) => {
    setFetchedData({
      ...fetchedData,
      [e.target.name]: e.target.value,
    });
    console.log(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="info_box">
        <div className="gender_info">
          <h3>Gender</h3>
          <Select
            className="gender"
            defaultValue={fetchedData.gender}
            placeholder={fetchedData.gender}
            onChange={setSelectedOption}
            options={gender}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "transparent" : "transparent",
                border: state.isFocused ? 0 : 0,
                boxShadow: "none",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "var(--light)",
                primary: "var(--light)",
                neutral80: "black",
              },
            })}
          />
        </div>
        <hr />
        <div className="gender_info ">
          <h3>Branch & College</h3>
          <p>{fetchedData && fetchedData.branch}</p>
          <p>{fetchedData && fetchedData.college}</p>
        </div>
        <hr />
        {/* <div className="gender_info location_info">
          <h3>Location</h3>
          <input name="location" onChange={handlOnChange}></input>
        </div>
        <hr /> */}
        <div className="gender_info">
          <h3>Sexuality</h3>
          <Select
            className="gender"
            defaultValue={fetchedData.sexual_orientation}
            placeholder={fetchedData.sexual_orientation}
            onChange={setSelectedOption}
            options={sexual_Orientation}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "transparent" : "transparent",
                border: state.isFocused ? 0 : 0,
                boxShadow: "none",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "var(--light)",
                primary: "var(--light)",
                neutral80: "black",
              },
            })}
          />
        </div>
        <hr />
        <div className="gender_info">
          <h3>Looking For</h3>
          <Select
            className="gender"
            defaultValue={fetchedData.gender}
            onChange={setSelectedOption}
            options={gender}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "transparent" : "transparent",
                border: state.isFocused ? 0 : 0,
                boxShadow: "none",
              }),
            }}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: "var(--light)",
                primary: "var(--light)",
                neutral80: "black",
              },
            })}
          />
        </div>
        <hr />

        <div className="gender_info hobby_info">
          <h3>Hobby</h3>
          <input
            name="hobbies"
            onChange={handlOnChange}
            value={fetchedData && fetchedData.hobbies}
          ></input>
        </div>
        <hr />

        <div className="gender_info bio_inf0">
          <h3>Bio</h3>
          <textarea
            name="bio"
            rows="2"
            cols="30"
            onChange={handlOnChange}
            defaultValue={(fetchedData && fetchedData.bio) || ""}
          ></textarea>
        </div>
        <hr />
        <div className="gender_info language_info">
          <h3>Languages</h3>
          <input
            name="languages"
            onChange={handlOnChange}
            defaultValue="gujarati , english"
          ></input>
        </div>
        <hr />
        <button className="btn_back btn_update" onClick={updateProfile}>
          Update Profile
        </button>
      </div>
    </>
  );
}
