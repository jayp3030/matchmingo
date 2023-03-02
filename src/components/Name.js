import React,{useState} from 'react'


export default function Name(props) {

  const host = "http://localhost:8000";

  const [credentials, setCredentials] = useState({
    first_name:"",
    last_name:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault()

    //To check whether user has entered required fields or not
    if(!credentials.first_name || !credentials.last_name){
      document.getElementById("name_page_alert").style.opacity = 1;
      return;
    }
    const response = await fetch(`${host}/details/userDetails`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: props.getUserID(localStorage.getItem("token")).user.id,
        first_name: credentials.first_name,
        last_name: credentials.last_name
      }),
    });
    if(response.ok){
      document.getElementById("profile_setup").style.transform = "translateX(-200vw)"
    }
    
  }

  const handlebackwardSlide = (e) => {
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(0vw)"
  }

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div className="outer_signup" id='name'>
        <div className="col1" id="blurer">
        </div>
        <div className="col2">
          <div className="upper">
            <h2>Enter Your Name</h2>
          </div>
          <div className="middle">
            <form action="">
              <input type="text" id='first_name' name="first_name" value={credentials.first_name} onChange={handleOnChange} placeholder="Enter First Name" />
              <input type="text" id='last_name' name="last_name" value={credentials.last_name} onChange={handleOnChange}  placeholder="Enter Last Name" />
              <p className='alert' id='name_page_alert'>Ender Required Fields</p>
              <button className="btn" onClick={handleSubmit}>Next</button>
              <button className="btn_back" onClick={handlebackwardSlide}>Back</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
