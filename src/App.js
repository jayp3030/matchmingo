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


function App() {

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
            <Route exact path="/home" element={<Homeright />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
            <Route path="/edit" element={<EditProfile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/chattest" element={<ChatPage />} />
            
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
