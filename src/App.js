
import './App.css';
import Landing_part02 from './components/Landing_part02';
import Landing_Part01 from './components/Landing_Part01';

import Intro from './components/Intro';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <>
   
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;


