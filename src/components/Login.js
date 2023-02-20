import React from "react";
import SidePresentation from "./SidePresentation";
import LoginForm from "./loginForm";
import { motion,AnimatePresence } from "framer-motion";

const Login =  () =>{
return(
    <>
    <AnimatePresence >
    <div className="login_page_main_div fcc" >
        <SidePresentation />
        {/* <LoginForm /> */}
    </div>
    </AnimatePresence>
    </>
)

}

export default Login;