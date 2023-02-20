import './App.css';
import Intro from './components/Intro';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
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


