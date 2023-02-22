import React from "react";
import obj from '../images/google.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const LoginForm = () => {
  return (
    <>
      <div className="login_form_div">
        <div className="login_form_div_container fcc">
          <div className="login_form_container fcc">
            <div className="login_title_container fcc">
                <p className="login_title">Welcome Back ,
                <motion.h5
                initial={{x:-500}}
                animate={{x:0}} 
                transition={{duration:3,type:'spring',stiffness:300}}
                className="user_name">Mayank</motion.h5>
                </p>
            </div>
            <div className="login_google_container fcc">
                <div className="google_button_div fcc">
                    <motion.button id="google_login"
                    whileHover={{scale:1.07}}
                    >
                        <img src={obj}></img>
                        <p>Log in With Google</p>
                    </motion.button>
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
                        <motion.button className="submit_btn"
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
