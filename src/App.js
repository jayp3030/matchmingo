
import './App.css';
import Intro from './components/Intro'; 
import Signup from './components/Signup';
import { BrowserRouter , Routes , Route} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    
      <Routes  >
        <Route exact path='/' element={<Intro />}  />
        <Route exact path='/signup'  element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
 
      
export default App;


