import React,{useEffect} from "react";
import SidePresentation from "./SidePresentation";
import LoginForm from "./loginForm";
import {AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login =  () =>{

    const Navigate = useNavigate();

    useEffect(()=>{
        // if user is already logged in then redirect to home page
        if(localStorage.getItem("token")){
          Navigate("/home")
        }
      },[])

return(
    <>
    <AnimatePresence >
    <div className="login_page_main_div fcc" >
        <SidePresentation />
        <LoginForm />
    </div>
    </AnimatePresence>
    </>
)

}

export default Login;