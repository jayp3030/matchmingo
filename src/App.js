import './App.css';
import Intro from './components/Intro';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import { AnimatePresence } from 'framer-motion';

import ProfileSetup from './components/ProfileSetup';


function App() {

  return (
    <>
      <ProfileSetup />
      
  {/* <AnimatePresence>
   <BrowserRouter>
        <Routes >
          <Route  exact path='/' element={<Intro/>} />
          <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
  </AnimatePresence> */}
    </>
  );
}
 
      
export default App;


