import React,{useState} from "react";
import obj1 from '../images/google.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {

  var [isLogIn,setLogIn]=useState(false);
  var [data, setData] = useState({first_name:null,last_name:null,email:null});
  var [personal,setPersonal]=useState({birthday:null,gender:null})
const obj=window.gapi;
var data_combine={};
var data_bir_gen={}

  const Navigate = useNavigate();
  const host = "http://localhost:8000";
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  
  const handleForgetPassword=async(e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/auth/requestResetPassword`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email:credentials.email
      }),
    });
    const json = await response.json();
  }
  const handleLogin=async(e)=>{
    e.preventDefault();
    const response = await fetch(`${host}/auth/loginUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const json = await response.json();
    if(json.success){
      localStorage.setItem("token",json.token)
      Navigate("/home")
      return
    }
    else{
      document.getElementById("loginPageAlert").style.opacity = 1
    }
  }


  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleCal=async ()=>{
    var auth_obj=window.gapi.auth2.getAuthInstance();
    console.log(auth_obj);
    if(isLogIn==false){
      await auth_obj
      .signIn()
      .then(async (e)=>
        {
          console.log(e);
          data_combine={
            "first_name":e.tv.PZ,
            "last_name":e.tv.eY,
            "email":e.tv.fw
          }
          setData({
            first_name:e.tv.PZ,
            last_name:e.tv.eY,
            email:e.tv.fw
        })
        console.log("data =");
        console.log(data);
      })
    }
  
    const state = await window.gapi.auth2.getAuthInstance().isSignedIn.Oa;
      setLogIn(state);
      await window.gapi.client.load("people","v1",async ()=>{
        var req01=window.gapi.client.people.people.get({
                'resourceName': 'people/me',
                'personFields': 'birthdays,genders,addresses'})
        await req01.execute(async (e)=>{
          console.log(e);
         
          setPersonal(
            {
              birthday:e.birthdays[0].date,
              gender:e.genders[0].value
            }
              );
        }) 
       
      })
  }
  return (
    <>
      <div className="login_form_div">
        <div className="login_form_div_container fcc">
          <div className="login_form_container fcc">
            <div className="login_title_container fcc">
                <p className="login_title">Welcome User ,
                </p>
            </div>
            <div className="login_google_container fcc">
                <div className="google_button_div fcc">
                    <motion.button id="google_login"
                    onClick={handleCal}
                    whileHover={{scale:1.07}}
                    >
                        <img src={obj1}></img>
                        <p>Log in With Google</p>
                    </motion.button>
                </div>
                <div className="OR_div">
                    <div className="login_OR_div">
                    <p className="ORP">OR</p>
                    </div>
                </div>
            </div>
            <div className="form_container fcc">
                <div className="form_part1">
                    <form id="login_form_ff" className="fcc">
                        <input type="email" placeholder="Enter Your Email" name="email" id="email" value={credentials.email} onChange={handleOnChange}>
                        </input>
                        <input type="password" placeholder="Password" name="password" id="password" value={credentials.password} onChange={handleOnChange}>
                        </input>
                        <p className="loginPageAlert alert" id="loginPageAlert">Please enter valid credentials</p>
                        <div className="remember_me_login">
                            <div className="re01">
                            <input type="checkbox" id="remember"/>
                        <p className="remember_me">&nbsp;Remeber This Device</p>
                            </div>
                            <div className="re02">
                            <button className="link" onClick={handleForgetPassword}><p className="forget_password">Forget Password ?</p></button>
                            </div>
                        </div>
                        <div className="submit_btn_div">
                        <motion.button onClick={handleLogin} className="submit_btn"
                        whileHover={{scale:1.02}}
                        >Login</motion.button>
                        <div className="not_an_member">
                            <p>Not a Member ?&nbsp;</p>
                            <Link to='/signup' className="link"><p>Sign Up For Free</p></Link>
                        </div>

                        </div>
                        

                    </form>
                </div>
                <div className="form_part2">

                </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
