import React, { useEffect, useState } from "react";

export default function EditProfile() {
  const host = "http://localhost:8000";

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

    if (!fetchedData.bio || !fetchData.hobbies || !fetchedData.languages || !fetchedData.location) {
      console.log("invalid")
    }

    let response = await fetch(`${host}/details/userDetails`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fetchedData),
    });
    console.log(e, "not resolved");
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
          <select
            name="gender"
            className="gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <hr />
        <div className="gender_info ">
          <h3>Branch & College</h3>
          <p>{fetchedData && fetchedData.branch}</p>
          <p>{fetchedData && fetchedData.college}</p>
        </div>
        <hr />
        <div className="gender_info location_info">
          <h3>Location</h3>
          <input name="location" onChange={handlOnChange}></input>
        </div>
        <hr />
        <div className="gender_info">
          <h3>Sexuality</h3>
          <select name="gender" className="gender">
            <option value="Female">Lesbian</option>
            <option value="Male">Straigth</option>
            <option value="Female">Gay</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <hr />
        <div className="gender_info">
          <h3>Looking For</h3>
          <select name="gender" className="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
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
