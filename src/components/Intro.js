import React from "react";
import Landing_part01 from "./Landing_Part01";
import Landing_part02 from "./Landing_part02";
const Intro = () =>{
    return(
        <>
        <div className="cursor_outer" id="cursor">
        <div className="cursor_outside">
       <div className='cursor_div'>
        </div>
        <p className="find_cursor">Find</p>
        <p className="match_cursor">Match</p>
       </div>
        </div>
        <Landing_part01 /> 
        <Landing_part02 />
       
        
        </>
    )
}

export default Intro;

document.addEventListener("mousemove",(e)=>{
    var ref=document.getElementById("cursor");
    var x=e.clientX;
    var y=e.clientY ;
    
    ref.style.transform="translate3d( " + x + "px," + y + "px" + "," + "0px)";
    console.log(x,y);


})