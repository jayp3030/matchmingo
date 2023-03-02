import React, { useState } from "react";

export default function EditProfile() {
  const [data, setData] = useState({
    location: "",
    hobbies:"",
    bio: "",
    languages: "",
  });

  const handlOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  return (
    <>
      <div className="info_box">
        <div className="gender_info">
          <h3>Gender</h3>
          <select name="gender" className="gender" >
            <option value="Male">Male</option>
            <option value="Female">
              Female
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <hr />
        <div className="gender_info ">
          <h3>Branch & College</h3>
          <p>Computer Engineering</p>
          <p>Vishwakarma Government Engineering College</p>
        </div>
        <hr />
        <div className="gender_info location_info">
          <h3>Location</h3>
          <input 
          name="location" 
          onChange={handlOnChange}
          ></input>
        </div>
        <hr />
        <div className="gender_info">
          <h3>Sexuality</h3>
          <select name="gender" className="gender">
            <option value="Male">
              Straigth
            </option>
            <option value="Female">Lesbian</option>
            <option value="Female">Gay</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <hr />
        <div className="gender_info">
          <h3>Looking For</h3>
          <select name="gender" className="gender">
            <option value="Male">Male</option>
            <option value="Female" >
              Female
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <hr />

        <div className="gender_info hobby_info">
          <h3>Hobby</h3>
          <input 
          name="hobbies"
          onChange={handlOnChange}
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
          >
          </textarea>
        </div>
        <hr />
        <div className="gender_info language_info">
          <h3>Languages</h3>
          <input 
          name="languages" 
          onChange={handlOnChange}
          ></input>
        </div>
        <hr />
      </div>
    </>
  );
}
