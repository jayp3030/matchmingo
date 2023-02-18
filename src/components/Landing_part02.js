import React from "react";
import heart from '../images/heart.png'
import Landing_carousel from "./Landing_carousel";
const Landing_part02 = () => {
  return (
    <>
      <div className="landing_part02">
        <div className="landing_part02_container">
          <div className="landing_part02_container01 fcc">
          </div>
          <div className="fcc landing_part02_container02 ">
            <div className="active_part_container02 fcc">
                <img src={heart} alt='heart' ></img>
                <p>
                Who told you to be specific ,<br></br>
                when you can start it from anywhere</p>
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
