/* eslint-disable react/jsx-pascal-case */
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import heart from '../images/heart.png'
import Landing_carousel from "./Landing_carousel";
import { useNavigate } from "react-router-dom";




const Landing_part02 = () => {
  const [carousel, setCarousel] = useState(false)
  const Navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setCarousel(true)
    }, 2000);
  }, [])
  

  return (
    <>
      <motion.div className="landing_part02" id="landing_part02" onClick={()=>{Navigate("/signup")}}>
        <div className="landing_part02_container">
          <div className="landing_part02_container01 fcc">
          </div>
          <div className="fcc landing_part02_container02 ">
            <div className="active_part_container02 fcc">
                <img src={heart} 
                alt='heart'></img>
                <p>
                Who told you to be specific ,<br></br>
                when you can start it from anywhere</p>
            </div>
          </div>
          <div className="landing_part02_container03">
              {carousel && <Landing_carousel />}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Landing_part02;
