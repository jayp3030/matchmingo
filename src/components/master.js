import SidePresentation from "./SidePresentation";
import Intro from "./Intro";
import LoginForm from "./loginForm";
import React from "react";
import Signup from "./Signup";
const Master = (e)=>{
    console.log(e.flag);
    return (
        <>
 <div className="login_page_main_div fcc" >
        <SidePresentation />
        {
            e.flag==='login' && (<LoginForm />)
        }
        {
            e.flag==='signup' && (<Signup />)
        }
    </div>
        </>
    )
}

export default Master;