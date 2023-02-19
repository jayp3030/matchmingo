import React from "react";
import obj from '../images/google.png'
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <>
      <div className="login_form_div">
        <div className="login_form_div_container fcc">
          <div className="login_form_container fcc">
            <div className="login_title_container fcc">
                <p className="login_title">Welcome Back ,Mayank</p>
            </div>
            <div className="login_google_container fcc">
                <div className="google_button_div fcc">
                    <button id="google_login">
                        <img src={obj}></img>
                        <p>Log in With Google</p>
                    </button>
                </div>
                <div className="OR_div">
                    <div className="login_OR_div">
                    <p>OR</p>
                    </div>
                </div>
            </div>
            <div className="form_container fcc">
                <div className="form_part1">
                    <form id="login_form_ff" className="fcc">
                        <input type="email" placeholder="Enter Your Email">

                        </input>
                        <input type="password" placeholder="Password">

                        </input>

                        <div className="remember_me_login">
                            <div className="re01">
                            <input type="checkbox" id="remember"/>
                        <p className="remember_me">&nbsp;Remeber This Device</p>
                            </div>
                            <div className="re02">
                            <Link to='/' className="link"><p className="forget_password">Forget Password ?</p></Link>
                            </div>
                        
                        
                        </div>
                        <div className="submit_btn_div">
                        <button className="submit_btn">Login</button>
                        <div className="not_an_member">
                            <p>Not a Member ?&nbsp;</p>
                            <Link to='/' className="link"><p>Sign Up For Free</p></Link>
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
