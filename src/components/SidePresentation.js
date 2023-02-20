import React from "react";
import { motion } from "framer-motion";
const SidePresentation = () => {
  return (
    <>
      <div className="Side_presentation">
        <div className="side_presenation_container fcc" id="gradient">
          <div className="blurer fcc" id="blurer">
            <div className="logo_div_login fcc">
              <motion.p initial={{opacity:0,x:-500}} animate={{opacity:1,x:0}} transition={{ duration : 2}}>MatchMingo</motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(SidePresentation);

