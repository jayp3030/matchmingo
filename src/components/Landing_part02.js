import React from "react";
import heart from '../images/heart.png'
const Landing_part02 = () => {
  return (
    <>
      <div className="landing_part02">
        <div className="landing_part02_container">
          <div className="landing_part02_container01 fcc">
            <p className="title_matchmingo">MatchMingo</p>
          </div>
          <div className="fcc landing_part02_container02 ">
            <div className="active_part_container02 fcc">
                <img src={heart} ></img>
                <p>
                who told you to be specific ,
                </p>
                <p>when you can start it from anywhere</p>
            </div>
          </div>
          <div className="landing_part02_container03"></div>
        </div>
      </div>
    </>
  );
};

export default Landing_part02;
