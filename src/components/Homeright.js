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

export default function Homeright() {
  const host = process.env.REACT_APP_BASEURL
  const Navigate = useNavigate();
  const [cardIdArray, setCardIdArray] = useState([]);
  const [IdCount, setIdCount] = useState(0);

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

  const fetch_data=async(userId)=> {
    console.log("fetching" + userId.userId)

    const response = await fetch(`${host}/details/getUserById?id=${userId.userId}`,{
      method:"get",
      headers: { "Content-Type": "application/json" }
    });
    const json = await response.json()
    setPersonalDT([json]);  
  }

  const checkUserInfoStatus = async () => {

    const response = await fetch(`${host}/auth/userAuthCompletedStatus?id=${jwt_decode(localStorage.getItem("token")).user.id}`)
    const json = await response.json()
    if (!json) {
      localStorage.removeItem("token")
      Navigate("/login")
    }

  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Navigate("/login")
    }
    else {
      checkUserInfoStatus()
    }
    getUserDetails();
    getUserImg();
  }, []);

  useEffect(() => {
    if (cardIdArray.length !== 0 && cardIdArray[IdCount].userId !== jwt_decode(localStorage.getItem("token")).user.id) {
      fetch_data(cardIdArray[IdCount]);
      getUserImages(cardIdArray[IdCount]);
      setIdCount(IdCount + 1);
    }
  }, [cardIdArray]);

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
    setTimeout(() => { }, 2500);
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
        b.style.width="40%";
        contou.style.width="40%";
      a.style.width = "60%";
    }
    else {
      if(window.innerWidth>=730 && window.innerWidth<=827){
        b.style.width="53%";
        contou.style.width="53%";
      }
      a.style.width = "0%";
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
    if (json.gender === "Male") {
      fetchAllIdToShow("girls")
    }
    else {
      fetchAllIdToShow("boys")
    }
  };

  // function to get user Images
  const [userImgs, setuserImgs] = useState([]);
  const [userCardImgs, setuserCardImgs] = useState([]);

  const getUserImg = async () => {
    const response = await fetch(`${host}/details/getUserImage`, {
      method: "GET",
      headers: { "auth-token": localStorage.getItem("token"),
      "Content-Type": "application/json" },
    });
    const json = await response.json();
    console.log("HEllo");
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
      a.style.backgroundImage = `url(data:image/jpeg;base64,${userCardImgs[imgCount] && userCardImgs[imgCount].data
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
    console.log("updating")
    console.log(IdCount)
    setAnimation() 
    setTimeout(() => {
      fetch_data(cardIdArray[IdCount]);
      getUserImages(cardIdArray[IdCount]);
    }, 1000);
    setTimeout(() => {
      const card = document.getElementById('card')
      card.style.marginTop = "0%";
    }, 1000);
    setIdCount(IdCount + 1);
  }

  return (
    <>
      {console.log(cardIdArray)}
      <div className="home_outer">
        <div className="home_left">
          <div className="home_left_top">
            <div className="home_left_top_left">
              <img
                alt="userPhotos"
                src={`data:image/jpeg;base64,${userImgs[0] && userImgs[0].data
                  }`}
              />
            </div>
            <div className="home_left_top_middle">
              {userProfile && userProfile.first_name}
            </div>
            <div className="home_left_top_right">
              <i className="fa-solid fa-user-pen"></i>
            </div>
          </div>
          <div className="home_left_middle">
            <div
              className="home_left_middle_left"
              id="home_left_middle_left"
              onClick={moveToLike}
            >
              <i className="fa-sharp fa-solid fa-heart"></i>Likes
            </div>
            <div
              className="home_left_middle_right"
              id="home_left_middle_right"
              onClick={moveToMsg}
            >
              <i className="fa-solid fa-message"></i>Messages
            </div>
            <button type="reset" onClick={handleLogout}>
              logout
            </button>
          </div>
          <div className="home_left_bottom">
            {/* <MsgLike />  */}
          </div>
        </div>
        <div className="home_right">
          <div className="header">
            <h1>MatchMingo</h1>
          </div>
          {/* <div className="heart">
            <i className="fa-regular fa-heart"></i>
          </div> */}
          <div className="Container_of_profile">
            <motion.div className="moving_part" id={"moving_part"}>
              <div className="card_Container" id="card_Container">
                {waiting ? (
                  <motion.div
                    style={{
                      height: "100%",
                      width: "35%",
                      background: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        boxShadow: "0px 0px 3px black",
                        height: "15%",
                        width: "22%",
                        border: "10px solid #f1f1f1 inset",
                        borderTop: "10px solid var(--light)",
                        borderRadius: "200%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        animationTimingFunction: "ease-in-out",
                        animationName: "spin",
                        animationDuration: "2s",
                        animationIterationCount: "infinite",
                      }}
                    ></div>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="wait">
                    {personalDT.map((e, i) => {
                      return (
                        <motion.div
                          className="card"
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
                            className="card_left"
                            id="card_left"
                            onDoubleClick={super_like}
                          >
                            <div className="imageChangeArrowDiv" id="imageChangeArrowDiv">
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
                            <div className="userDetails">
                              <div className="userNameAge" id="userNameAge">
                                {e == null
                                  ? "Data Loading ..."
                                  : `${e.first_name}\n${e.last_name}`}
                              </div>

                              <div className="userBranch" id="userBranch">
                                CE
                              </div>
                            </div>
                            <div className="icons">
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
                                onClick={() => {
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
                )}
              </div>
            </motion.div>
          </div>
          <div className="home_bottom">
            <div className="bottom_inner">
              <div className="box">
                <i className="fa-regular fa-circle-left"></i>
                <p>PASS</p>
              </div>
              <div className="box">
                <i className="fa-regular fa-circle-right"></i>
                <p>LIKE</p>
              </div>
              <div className="box">
                <i className="fa-regular fa-circle-up"></i>
                <p>OPEN PROFILE</p>
              </div>
              <div className="box">
                <i className="fa-regular fa-circle-down"></i>
                <p>CLOSE PROFILE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
