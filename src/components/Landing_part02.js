import React from "react";
import heart from '../images/heart.png'
import Landing_carousel from "./Landing_carousel";
import { motion } from "framer-motion";
// var animate_heart={
//   start:{
//     x:"0%",
//   },
//   end:{
//     x:["0%","20%","50%","20%","0%"],
//   }
// }
// var animate_title={
//   start:{
//     borderRight:"5px solid var(--primary)",
//   },
//   end:{
//     width:["1ch","25ch"],
//   }
// }
const Landing_part02 = () => {
  return (
    <>
      <div className="landing_part02">
        <div className="landing_part02_container">
          <div className="landing_part02_container01 fcc">
            <motion.p className="title_matchmingo" 
            // variants={animate_title}  
            // initial="start" 
            // animate="end" 
            // animate={{x:["-20%","0%"]}}
            // transition={{type:"spring",stiffness:500,mass:2}} 
            >MatchMingo</motion.p>
          </div>
          <div className="fcc landing_part02_container02 ">
            <div className="active_part_container02 fcc">
                <img src={heart} 
                alt='heart'></img>
                <p>
                who told you to be specific ,
                </p>
                <p>when you can start it from anywhere</p>
            </div>
          </div>
          <div className="landing_part02_container03">
            <Landing_carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing_part02;
