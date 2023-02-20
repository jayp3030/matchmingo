import './App.css';
import Intro from './components/Intro';
import Landing_part02 from './components/Landing_part02';
import Landing_Part01 from './components/Landing_Part01';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
// import Intro from './components/Intro';
import Signup from './components/Signup';
import { AnimatePresence } from 'framer-motion';


function App() {

  return (
    <>
  <AnimatePresence>
   <BrowserRouter>
        <Routes >
          <Route  exact path='/' element={<Intro/>} />
          <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
  </AnimatePresence>
    </>
  );
}

export default App;


