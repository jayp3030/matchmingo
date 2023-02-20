import React from "react";
import { motion } from "framer-motion";
import matchmingo from "../images/MatchMingo.png";
const SidePresentation = () => {
  return (
    <>
      <div className="Side_presentation">
        <div className="side_presenation_container fcc" id="gradient">
          <div className="blurer fcc" id="blurer">
            <div className="logo_div_login fcc">
               {/* <motion.p initial={{opacity:0,x:-500}} animate={{opacity:1,x:0}} transition={{ duration : 2}}>MatchMingo</motion.p>  */}
              <img src={matchmingo} alt="img"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(SidePresentation);

// setInterval(() => {
//   var a = document.getElementById("blurer");
//   var x = Math.random() * 100;
//   var y = Math.random() * 100;

//   var z = x + "px," + y + "px";
//   // console.log(z);
//   a.style.backgroundPositionX =x+"px"; 
//   a.style.backgroundPositionY =y+"px"; 
//   a.style.transitionDuration = "1s";
// }, 500);
