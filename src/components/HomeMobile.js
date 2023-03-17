import SwipeListener from "swipe-listener";
import React, { useEffect, useRef, useState } from "react";
import ChatPage from "./ChatPage";
import { AnimatePresence, animate, motion } from "framer-motion";
import MsgSection from "./MsgSection";
import LikeSection from "./LikeSection";
import MsgLike from "./MsgLike";
import UserInfo from "./UserInfo";
import axios from "axios";
import { wait } from "@testing-library/user-event/dist/utils";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import img1 from "../images/285660_picture_image_pic_icon 1.png";
import img2 from "../images/favorite.png";
import img3 from "../images/icons8-messages-500 1.png";
import img4 from "../images/1167993_cog_cogwheel_configuration_parameters_properties_icon 1.png";
import img5 from "../images/landingPage05.jpg";
export default function HomeMobile(){
    const host = process.env.REACT_APP_BASEURL
    const Navigate = useNavigate();
    const [cardIdArray, setCardIdArray] = useState([]);
    const [IdCount, setIdCount] = useState(0);
    var [personalDT,setPersonal]=useState([null]);
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
    
      const handleLogout = () => {
        localStorage.removeItem("token");
        Navigate("/login");
      };
    
      var [right, setRight] = useState(true);
      var [waiting, setWaiting] = useState(false);
      // var [user_image, setUser_image] = useState(null);
      var [l, setL] = useState(5);
      var b = {
        name: "mayank1",
      };
      var c = {
        name: "mayank2",
      };
      var [personalDT, setPersonalDT] = useState([null]);
    
    
      const fetchAllIdToShow = async (gender) => {
        const response = await fetch(`${host}/details/getAll${gender}Id`);
        const json = await response.json();
        setCardIdArray(json);
      };
      async function fetch_data(userId) {
        const response = await fetch(
          `http://localhost:8000/details/getUser/${userId.userId}`
        );
        const json = await response.json();
        console.log(json);
        setPersonalDT([json]);
      }
    
      useEffect(() => {
        getUserDetails();
        getUserImg();
      }, []);
    
      // useEffect(() => {
      //   console.log(cardIdArray);
      //   if (cardIdArray.length !== 0 && cardIdArray[IdCount].userId!==jwt_decode(localStorage.getItem("token")).user.id) {
      //     fetch_data(cardIdArray[IdCount]);
      //     getUserImages(cardIdArray[IdCount]);
      //     setIdCount(IdCount + 1);
      //   }
      // }, [cardIdArray]);
      // useEffect(() => {
      //   if (preLoaded.length != 0) {
      //     var datta = preLoaded.shift();
      //     console.log(datta);
      //   }
      // }, [preLoaded]);
     
    
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
            delay: 1,
            ease: "backInOut",
            when: "beforeChildren",
          },
        },
      });
    
      async function setAnimation() {
        var card = document.getElementById("card");
        console.log(card);
        card.style.marginTop = "-400%";
        card.style.transitionDuration = "1s";
        setTimeout(() => {}, 2500);
      }
      // async function update() {
      //   var card = document.getElementById("card");
      //   await setAnimation();
      //   // await setWaiting(true);
      //   await axios
      //     .get("http://localhost:8000/details/getUserDetails/", {
      //       headers: { "auth-token": localStorage.getItem("token") },
      //     })
      //     .then((e) => {
      //       preLoaded.push(e.data);
      //       setPersonalDT([preLoaded.shift()]);
      //       // setWaiting(false);
      //       setTimeout(() => {
      //         card.style.marginTop = "0%";
      //       }, 1000);
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //     });
        
          
      //   //  setTimeout(()=>{},2000)
       
      //   await axios
      //     .get("http://localhost:8000/details/getUserImage/", {
      //       headers: { "auth-token": localStorage.getItem("token") },
      //     })
      //     .then((e) => {
      //       setUser_image(e.data[0].data);
      //       console.log("data of image");
      //       console.log(e);
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //     });
    
      //   // http://localhost:8000/details/getUserImage
      // }
    
      function expand() {
        var count = 0;
        var a = document.getElementById("card_right");
        var b=document.getElementById("card_left");
        var contou=document.getElementById('imageChangeArrowDiv');
        count = a.style.width;
     
        if (count == "" || count == "0%") {
          b.style.display="none";
              // b.style.width="0% !important";
              contou.style.width="0%";
          a.style.width = "100%";
        } 
        else {
          
            // b.style.width="62%";
            // contou.style.width="62%";
          a.style.width = "0%";
          setTimeout(()=>{b.style.display="flex";},500)
        } 
      }
    
      window.addEventListener("keydown", async (e) => {
        var card = document.getElementById("card");
        var user_name = document.getElementById("userNameAge");
        var user_branch = document.getElementById("userBranch");
        if (e.key === "ArrowLeft") {
          update();
        } else if (e.key === "ArrowRight") {
          like();
        } else if (e.key == "ArrowUp" || e.key == "ArrowDown") {
          console.log("arrow up or down has been pressed");
          var count = 0;
          var a = document.getElementById("card_right");
          count = a.style.width;
          console.log(a);
          if (count == "" || count == "0%") {
            a.style.width = "60%";
            window.alert(a.style.width);
          } //a.style.display = "block";
          else {
            a.style.width = "0%";
          } //a.style.display = "none";
        }
      });
    
      function super_like() {
        window.alert("super like has been given");
        console.log("super like given");
      }
      function like() {
        window.alert("like has been given");
        console.log("like was given");
      }
    
      window.onload = () => {
        document.addEventListener("touchstart", handleTouchStart, false);
        document.addEventListener("touchmove", handleTouchMove, false);
      };
    
      var xDown = null;
      var yDown = null;
    
      function getTouches(evt) {
        return (
          evt.touches || // browser API
          evt.originalEvent.touches
        ); // jQuery
      }
    
      function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      }
    
      function handleTouchMove(evt) {
        if (!xDown || !yDown) {
          return;
        }
    
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
    
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
    
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /*most significant*/
          if (xDiff > 0) {
            /* right swipe */
            expand();
            console.log("swipe right");
          } else {
            /* left swipe */
            super_like();
            console.log("swipe left");
          }
        } else {
          if (yDiff > 0) {
            /* down swipe */
            update();
            console.log("swipe down");
          } else {
            /* up swipe */
            like();
            console.log("swipe up");
          }
        }
        /* reset values */
        xDown = null;
        yDown = null;
      }
    
      const [userProfile, setuserProfile] = useState();
      const getUserDetails = async () => {
        const response = await fetch(`${host}/details/getUserDetails`, {
          method: "GET",
          headers: { "auth-token": localStorage.getItem("token") },
        });
        const json = await response.json();
        setuserProfile(json);
        if(json.gender==="Male"){
          fetchAllIdToShow("girls")
        }
        else{
          fetchAllIdToShow("boys")
        }
      };
     
      // function to get user Images
      const [userImgs, setuserImgs] = useState([]);
      const [userCardImgs, setuserCardImgs] = useState([]);
    
      const getUserImg = async () => {
        const response = await fetch(`${host}/details/getUserImage`, {
          method: "GET",
          headers: { "auth-token": localStorage.getItem("token") },
        });
        const json = await response.json();
        console.log(json);
        setuserImgs(json);
      };
    
      const getUserImages = async (userId) => {
        console.log(userId);
        const response = await fetch(`${host}/details/getUserImagebyId/${userId.userId}`, {
          method: "GET",
        });
        const json = await response.json();
        console.log(json);
        setuserCardImgs(json);
      };
    
      const [imgCount, setImgCount] = useState(0);
    
      useEffect(() => {
        displayImage();
      }, [userCardImgs]);
      function displayImage() {
        var a = document.getElementById("card_left");
        if (a) {
          a.style.backgroundImage = `url(data:image/jpeg;base64,${
            userCardImgs[imgCount] && userCardImgs[imgCount].data
          })`;
        }
      }
    
      const handleLike = async (userId) => {
        if (!localStorage.getItem("token")) {
          return;
        }
    
        const response = await fetch(`${host}/match/addLike`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: jwt_decode(localStorage.getItem("token")).user.id,
            id: userId,
          }),
        });
        if (response.ok) {
          console.log("like successfull");
        }
      };
      const handleImageChangeLeft = () => {
        console.log("left");
        if (imgCount === 0) {
          setImgCount(userImgs.length - imgCount - 1);
        } else {
          setImgCount(imgCount - 1);
        }
      };
      const handleImageChangeRight = () => {
        setImgCount((imgCount + 1) % userImgs.length);
      };
    
      async function update() {
        if (cardIdArray[IdCount].userId!==jwt_decode(localStorage.getItem("token")).user.id) {
          console.log(cardIdArray[IdCount])
          setAnimation();
          setTimeout(() => {
            fetch_data(cardIdArray[IdCount]);
            getUserImages(cardIdArray[IdCount]);
          }, 1000);
          setTimeout(() => {
            const card = document.getElementById('card')
            card.style.marginTop = "0%";
          }, 1000);
        }
        else{
          setAnimation()

          setTimeout(() => {
            fetch_data(cardIdArray[IdCount]);
            getUserImages(cardIdArray[IdCount]);
          }, 1000);

          setTimeout(() => {
            const card = document.getElementById('card')
            card.style.marginTop = "0%";
          }, 1000);
        }
        setIdCount(IdCount + 1);
      }
return (
    <>
    <div className="home_outer_mobile">
        <div className="home_right_mobile">
        <div className="header_mobile fcc header">
            <h1>MatchMingo</h1>
        </div>
        <div className="middle_mobile fcc">
        <AnimatePresence mode="wait">
                    {personalDT.map((e, i) => {
                      return (
                        <motion.div
                          className="card card_mobile"
                          id="card"
                          onPanStart={(e) => {
                            console.log(e);
                          }}
                          key={i}
                          variants={obj}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div
                            className="card_left card_left_mobile"
                            id="card_left"

                            onDoubleClick={super_like}
                          >
                            <div className="imageChangeArrowDiv image_slide_container" id="imageChangeArrowDiv">
                              <i
                                className="bi bi-arrow-left-circle-fill"
                                onClick={handleImageChangeLeft}
                              ></i>
                              <i
                                className="bi bi-arrow-right-circle-fill"
                                onClick={handleImageChangeRight}
                              ></i>
                            </div>

                            {userCardImgs && displayImage()}
                            {/* {userCardImgs.map((img,index)=>{
                              return <img src={`data:image/jpeg;base64,${
                               img.data
                              }`} alt="" />
                            })} */}
                            <div className="userDetails userDetaileMobile">
                              <div className="userNameAge" id="userNameAge">
                                {e == null
                                  ? "Data Loading ..."
                                  : `${e.first_name}\n${e.last_name}`}
                              </div>

                              <div className="userBranch" id="userBranch">
                                CE
                              </div>
                            </div>
                            <div className="icons iconsMobile">
                              <motion.i
                                whileHover={{ scale: 1.22 }}
                                className="fa-regular fa-circle-xmark"
                                onClick={update}
                              ></motion.i>
                              <motion.i
                                whileHover={{ scale: 1.22 }}
                                className="fa-regular fa-circle-check"
                                onClick={update}
                              ></motion.i>
                              <motion.i
                                whileHover={{ scale: 1.22 }}
                                className="fa-solid fa-circle-info"
                                onClick={expand}
                              ></motion.i>
                              <motion.i
                                whileHover={{ scale: 1.22 }}
                                className="fa-regular fa-heart"
                                onClick={()=>{
                                  handleLike(e.userId)
                                }}
                              ></motion.i>
                              <motion.i
                                whileHover={{ scale: 1.22 }}
                                className="fa-solid fa-gift"
                              ></motion.i>
                            </div>
                          </div>
                          <div className="card_right" id="card_right">
                            {waiting ? (
                              <div
                                style={{
                                  background: "green",
                                  height: "100%",
                                  width: "60%",
                                }}
                              ></div>
                            ) : (
                              <div className="info_box">
                                <div className="gender_info">
                                  <h3>Gender</h3>
                                  <p>
                                    {e == null ? "No Data Available" : e.gender}
                                  </p>
                                </div>
                                <hr />
                                <div className="gender_info">
                                  <h3>Branch & College</h3>
                                  <p>
                                    {e == null ? "No Data Available" : e.branch}
                                  </p>
                                  <p>{e == null ? "- - -" : e.college}</p>
                                </div>
                                <hr />
                                <div className="gender_info">
                                  <h3>Location</h3>
                                  <p>Ahmedabad , Gujarat , India</p>
                                </div>
                                <hr />
                                <div className="gender_info">
                                  <h3>Attraction</h3>
                                  <p>
                                    {e == null
                                      ? "Not Specified"
                                      : e.sexual_orientation}
                                  </p>
                                </div>
                                <hr />
                                <div className="gender_info">
                                  <h3>Gender</h3>
                                  <p>
                                    {e == null ? "No Data Available" : e.gender}
                                  </p>
                                </div>
                                <hr />
                                <div className="gender_info">
                                  <h3>Hobby</h3>
                                  {e == null
                                    ? " . . . "
                                    : e.hobbies.map((e, i) => {
                                        return <p>{e}</p>;
                                      })}
                                </div>
                                <hr />
                                <div className="gender_info">
                                  <h3>Bio</h3>
                                  <p>{e == null ? "No Bio Added" : e.bio}</p>
                                </div>
                                <hr />
                                <div className="gender_info">
                                  <h3>Languages</h3>
                                  <p>Gujarati,English</p>
                                </div>
                                <hr />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
            
        </div>
        <div className="footer_mobile fcc">
            <div className="footer_mobile_container">
             
              <div className="footer_logos fcc">
                <img src={img1}></img>
              </div>
            
              
              <div  className="footer_logos fcc">
              <a href={"./like"}>
              <img src={img2}></img>
              </a>
              </div>
             
              
             
              <div  className="footer_logos fcc">
              <a href={"./chat"}>
              <img src={img3}></img>
              </a>
              </div>
             
              
              <div  className="footer_logos fcc">
              <img src={img4}></img>
              </div>
            </div>
        </div>
        </div>
    </div>
    </>
)
}