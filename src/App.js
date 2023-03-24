import "./App.css";
import Intro from "./components/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Master from "./components/master";
import ProfileSetup from "./components/ProfileSetup";
import Verified from "./components/Verified";
import Homeright from "./components/Homeright";
import Login from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import EditProfile from "./components/EditProfile";
import { useEffect } from "react";
import Test from "./components/Test";
import MsgLike from "./components/MsgLike";
import ChatPage from "./components/ChatPage";
import Uploadphoto from "./components/Uploadphoto";
import UploadId from "./components/UploadId";
import HomeMobile from "./components/HomeMobile";
import LikeSection from "./components/LikeSection";
import LikeSectionMobile from "./components/LikeSectionMobile";
import MsgSectionMobile from "./components/MsgSectionMobile";
import Age from "./components/Age";
import Hobby from "./components/Hobby";
import Signup from "./components/Signup";
function App() {
  var obj_gapi=window.gapi;
  var CLIENT_ID ="646322029510-5gabrec6u1phpnp0lspfdv5uj5gopeut.apps.googleusercontent.com";
    var API_KEY = "AIzaSyCrH5V637UOA6baVFReHGhj7P2Gw7z3_w8";
    const SCOPES = "https://mail.google.com/ " + 
  " https://www.googleapis.com/auth/user.birthday.read " +
  " https://www.googleapis.com/auth/user.gender.read " +
  " https://www.googleapis.com/auth/user.addresses.read "
  try{     
  obj_gapi.load("client:auth2", async ()=>{
          obj_gapi.client.init({
            apiKey:API_KEY,
            clientId:CLIENT_ID,
            scope:SCOPES,
            plugin_name: "MatchMingo",
          }) 
});
  }catch(e){console.log(e);}
  const setThemme=()=>{
    var root = document.querySelector(':root');
    if(localStorage.getItem("mode")){
      if(localStorage.getItem("mode")==="light"){
        root.style.setProperty('--primary','#011627');
        root.style.setProperty('--accent','#FDFFFC');
        root.style.setProperty("--light","#2EC4B6")
      }
      else{
        root.style.setProperty('--primary','#FDFFFC');
        root.style.setProperty('--accent','#011627');
        root.style.setProperty("--light","#2EC4B6")
        document.getElementById("landing_part02") && (document.getElementById("landing_part02").style.background = "transparent") 
      }
    }
  }

  useEffect(() => {
    setThemme()
  }, [])
  
  return (
    <>
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Intro />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<ProfileSetup />} />
            <Route exact path="/verified" element={<Verified />} />
            {window.innerWidth<=730 ?
            <>
              (<Route exact path="/home" element={<HomeMobile/>} />
            <Route exact path="/like" element={<LikeSectionMobile/>} />
            <Route exact path="/chat" element={<MsgSectionMobile/>} />
            )
            </>
          :
            <Route exact path="/home" element={<Homeright />} />
            }
            <Route path="/passwordReset" element={<PasswordReset />} />
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/test" element={<Test />} />    
            <Route path="/photo" element={<Signup/>} />    
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
