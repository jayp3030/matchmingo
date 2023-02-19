import React from "react";
import SidePresentation from "./SidePresentation";
import LoginForm from "./loginForm";

const Login =  () =>{
return(
    <>
    <div className="login_page_main_div fcc" >
        <SidePresentation />
        <LoginForm />
    </div>
    </>
)

}

export default Login;