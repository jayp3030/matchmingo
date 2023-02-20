/* eslint-disable no-useless-concat */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Landing_part01 from "./Landing_Part01";
import Landing_part02 from "./Landing_part02";
import {useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro() {
    const Navigate = useNavigate()
    const goToSignup = () => {
        Navigate("/signup")
    }
    return (
        <>

            <Landing_part01 />
            <div className="cursor_outer" id="cursor" onClick={goToSignup}>
                <div className="cursor_outer" id="cursor" >
                    <div className="cursor_outside">
                        <div className='cursor_div'>
                        </div>
                        <p className="find_cursor">Find Match</p>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            <Landing_part02 />
        </>
    )
}

document.addEventListener("mousemove", (e) => {
    var ref = document.getElementById("cursor"); 
    var x = e.clientX;
    var y = e.clientY;

    ref.style.transform = "translate3d( " + (x - 50) + "px," + (y - 50) + "px" + "," + "0px)"; 


})