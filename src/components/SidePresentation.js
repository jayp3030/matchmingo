import React from "react";

const SidePresentation = () => {
  return (
    <>
      <div className="Side_presentation">
        <div className="side_presenation_container fcc" id="gradient">
          <div className="blurer fcc" id="blurer">
            <div className="logo_div_login fcc">
              <p>Match</p>
              <p>Mingo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePresentation;

setInterval(() => {
  var a = document.getElementById("blurer");
  var x = Math.random() * 100;
  var y = Math.random() * 100;

  var z = x + "px," + y + "px";
  console.log(z);
  a.style.backgroundPositionX =x+"px"; 
  a.style.backgroundPositionY =y+"px"; 
  a.style.transitionDuration = "1s";
}, 500);
