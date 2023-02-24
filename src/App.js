import './App.css';
import Intro from './components/Intro';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import { AnimatePresence } from 'framer-motion';
import Master from './components/master';
import ProfileSetup from './components/ProfileSetup';
import Verified from './components/Verified';
import Uploadphoto from './components/Uploadphoto';
import Test from './components/Test';
import Homeleft from './components/Homeright';
import Homeright from './components/Homeright';


function App() {

  return (
    <>
    <Homeright />
  {/* <AnimatePresence>
   <BrowserRouter>
        <Routes >
          <Route  exact path='/' element={<Intro />} />
          <Route exact path="/login" element={<Master flag="login" />} />
        <Route exact path="/signup" element={<ProfileSetup/>} />
        <Route exact path="/verified" element={<Verified/>} />
        <Route exact path="/test" element={<Test/>} />
        </Routes>
      </BrowserRouter>
  </AnimatePresence> */}
    </>
  );
}
 
      
export default App;


