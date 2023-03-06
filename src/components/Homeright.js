import React, { useEffect, useRef, useState } from "react";
import img from "../images/landingPage01.jpg";
import img2 from "../images/landingPage02.jpg";
import ChatPage from "./ChatPage";
import { AnimatePresence, animate, motion } from "framer-motion";
import MsgSection from "./MsgSection";
import LikeSection from "./LikeSection";
import MsgLike from "./MsgLike";
import UserInfo from "./UserInfo";
export default function Homeright() {
  const moveToLike = () => {
    document.getElementById("msg_like_wrapper").style.transform =
      "translateX(0vw)";
    // document.getElementById('home_left_middle_left').style.borderBottom = '2px solid var(--light)'
  };

  const moveToMsg = () => {
    document.getElementById("msg_like_wrapper").style.transform =
      "translateX(-30vw)";
    // document.getElementById('home_left_middle_right').style.borderBottom = '2px solid var(--light)'
  };

  var [right, setRight] = useState(true);
  var [l, setL] = useState(5);
  var [loc, setLoc] = useState({
    x: 0,
    y: 0,
  });
  var b={
    "name":"mayank1"
  };
  var c={
    "name":"mayank2"
  };
  var [personalDT,setPersonalDT]=useState([
    {
    "name":"mayank"
    }
])

var [obj, setObj] = useState({
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 1,
        delay:1,
        ease: "backInOut",
        when: "beforeChildren",
      },
    },
 
  });
  var reference = useRef(0);
  
  function update() {
    
    if (l >= 0) {
      setL((e) => e - 1);
    }
    var card=document.getElementById("card");
    console.log(card);
    card.style.marginTop="-200%";
    card.style.transitionDuration="1s";
    setPersonalDT([b]);
    setTimeout(()=>{card.style.marginTop="0%";},1000)
  }

  function expand() {
    var count=0;
    var a = document.getElementById("card_right");
    count=a.style.display;
    console.log("width =" + count);
    // if(count%2!=0 && count!=0){a.style.display = "block";}
    // else{a.style.display = "none";}
    if(count=='' || count=="none" ){a.style.display = "block";}
    else{a.style.display = "none";}
    console.log("button clicked");
    
    console.log(count);
    // a.style.width="60% !important";
   
  }
  var cards=document.getElementById("card");
  
    window.addEventListener("keyup", (e) => {
      console.log(e);
      var card=document.getElementById("card");
    
      if (e.key === "ArrowLeft") {
    //     console.log(card);
    // card.style.marginTop="-100%";
    // card.style.transitionDuration="1s";
    // setPersonalDT([b]);
    // setTimeout(()=>{card.style.marginTop="0%";},1000)
    setObj({
      initial: {
        opacity: 0,
        x: "100%",
      },
      animate: {
        opacity: 1,
        x: "0%",
        transition: {
          duration: 1,
          delay:1,
          ease: "backInOut",
          when: "beforeChildren",
        },
      },
      exit: {
        opacity: 0,
        x: "-100%",
        transition: {
          duration: 3,
          delay:1,
          ease: "backInOut",
          when: "beforeChildren",
        },
      },
    });
        if (l > 1) {
          setL(l - 1);
        }
      }
    });

 function super_like(){
  console.log("super like given");
 }
  

useEffect(()=>{{console.log(l);}},[l])
  var abc = document.getElementById("moving_part");

  return (
    <>
      <div className="home_outer">
        <div className="home_left">
          <div className="home_left_top">
            <div className="home_left_top_left">
              <img src={img2}></img>
            </div>
            <div className="home_left_top_middle">Sanko Rana</div>
            <div className="home_left_top_right">
              <i class="fa-solid fa-user-pen"></i>
            </div>
          </div>
          <div className="home_left_middle">
            <div
              className="home_left_middle_left"
              id="home_left_middle_left"
              onClick={moveToLike}
            >
              <i class="fa-sharp fa-solid fa-heart"></i>Likes
            </div>
            <div
              className="home_left_middle_right"
              id="home_left_middle_right"
              onClick={moveToMsg}
            >
              <i class="fa-solid fa-message"></i>Messages
            </div>
          </div>
          <div className="home_left_bottom">
            {/* <ChatPage /> */}
            <MsgLike />
          </div>
        </div>
        <div className="home_right">
          <div className="header">
            <h1>MatchMingo</h1>
          </div>
          {/* <div className="heart">
            <i class="fa-regular fa-heart"></i>
          </div> */}
          <div className="Container_of_profile">
            <motion.div
              className="moving_part"
              ref={reference}
              id="moving_part"
              onPanStart={(e) => {
                console.log(e);
                setLoc({ ...loc, x: e.clientX });
              }}
              onPanEnd={(e) => {
                setLoc({ ...loc, y: e.clientY });
                var card=document.getElementById("card");
                if (loc.x - loc.y >= 50) {
                  expand();
                  // card.style.marginTop="-200%";
                  // card.style.transitionDuration="1s";
                  // setPersonalDT([b]);
                  // setTimeout(()=>{card.style.marginTop="0%";},1000)
                  if (l > 1) {
                    setL((l) => l - 1);
                  }
                  else if (loc.X - loc.y <= 50) {
                    expand(); 
                  }
                }
              }}
            >
            <div className="card_Container" id="card_Container">
            <AnimatePresence mode="wait">
                {
                  
                // new Array(l).fill("").map((event, i) => (
                  personalDT.map(
                    (event,i)=>(
                  <motion.div
                    className="card"
                    id="card"
                    onPanStart={(e) => {console.log(e);}}
                    key={i}
                    variants={obj}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                   
                    // style={{top:i*105+"%",}}
                  >
                    <div className="card_left" id="card_left"
                     onDoubleClick={super_like}
                    >
                       {/* <img src={img} alt="" /> */} 
                      <div className="userDetails">
                        <div className="userNameAge">{event.name}Vedant&nbsp;,&nbsp;20</div>
                        <div className="userBranch">CE</div>
                      </div>
                      <div className="icons">
                        <motion.i
                          whileHover={{ scale: 1.22 }}
                          class="fa-regular fa-circle-xmark"
                          onClick={update}
                        ></motion.i>
                        <motion.i
                          whileHover={{ scale: 1.22 }}
                          class="fa-regular fa-circle-check"
                          onClick={update}
                        ></motion.i>
                        <motion.i
                          whileHover={{ scale: 1.22 }}
                          class="fa-solid fa-circle-info"
                          onClick={expand}
                        ></motion.i>
                        <motion.i
                          whileHover={{ scale: 1.22 }}
                          class="fa-regular fa-heart"
                        ></motion.i>
                        <motion.i
                          whileHover={{ scale: 1.22 }}
                          class="fa-solid fa-gift"
                        ></motion.i>
                      </div>
                    </div>
                    <div className="card_right" id="card_right" ref={reference}>
                      <div className="info_box">
            <div className="gender_info">
                <h3>Gender</h3>
                <p>Male</p>
            </div>
            <hr />
            <div className="gender_info">
                <h3>Branch & College</h3>
                <p>Computer Engineering</p>
                <p>Vishwakarma Government Engineering College</p>
            </div>
            <hr />
            <div className="gender_info">
                <h3>Location</h3>
                <p>Ahmedabad , Gujarat , India</p>
            </div>
            <hr />
            <div className="gender_info">
                <h3>Sexuality</h3>
                <p>Female</p>
            </div>
            <hr />
            <div className="gender_info">
                <h3>Gender</h3>
                <p>Male</p>
            </div>
            <hr />
            <div className="gender_info">
                <h3>Hobby</h3>
                <p>Cricket , Gym , Badminon</p>
            </div>
            <hr />
            <div className="gender_info">
                <h3>Bio</h3>
                <p>i am a good boy</p>
            </div>
            <hr />
            <div className="gender_info">
                <h3>Languages</h3>
                <p>Gujarati,English</p>
            </div>
            <hr />
        </div>
                    </div>
                  </motion.div>
                )
                )
                }
              </AnimatePresence>
            </div>
              
            </motion.div>



            {/* <div className="card">
              <img src={img} alt="" />
              <div className="userDetails">
                <div className="userNameAge">Vedant , 20</div>
                <div className="userBranch">CE</div>
              </div>
              <div className="icons">
                <motion.i
                  whileHover={{ scale: 1.22 }}
                  class="fa-regular fa-circle-xmark"
                ></motion.i>
                <motion.i
                  whileHover={{ scale: 1.22 }}
                  class="fa-regular fa-circle-check"
                ></motion.i>
                <motion.i
                  whileHover={{ scale: 1.22 }}
                  class="fa-solid fa-circle-info"
                ></motion.i>
                <motion.i
                  whileHover={{ scale: 1.22 }}
                  onTap={{}}
                  class="fa-regular fa-heart"
                ></motion.i>
                <motion.i
                  whileHover={{ scale: 1.22 }}
                  class="fa-solid fa-gift"
                ></motion.i>
              </div>
            </div> */}
          </div>
          <div className="home_bottom">
            <div className="bottom_inner">
              <div className="box">
                <i class="fa-regular fa-circle-left"></i>
                <p>PASS</p>
              </div>
              <div className="box">
                <i class="fa-regular fa-circle-right"></i>
                <p>LIKE</p>
              </div>
              <div className="box">
                <i class="fa-regular fa-circle-up"></i>
                <p>OPEN PROFILE</p>
              </div>
              <div className="box">
                <i class="fa-regular fa-circle-down"></i>
                <p>CLOSE PROFILE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
