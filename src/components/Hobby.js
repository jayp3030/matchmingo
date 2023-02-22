import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Hobby() {
  const handleSlide = (e)=>{
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-500vw)"
  }
  const handlebackwardSlide = (e)=>{
    e.preventDefault()
    document.getElementById("profile_setup").style.transform = "translateX(-300vw)"
  }

  const Navigate = useNavigate();

  document.addEventListener('mousemove', function(event) { 
    var rect = document.getElementById('testDiv').getBoundingClientRect(); 
    var x = event.clientX - rect.left; 
    var y = event.clientY - rect.top; 

     
    if(x>0 && x<320 && y>0 && y<40 ){
        document.getElementById("circle").style.display = "block" 
        document.getElementById("circle").style.top = y + "px";
        document.getElementById("circle").style.left = x + "px";
    }
      else{
        document.getElementById("circle").style.display = "none" 
      }
      
  }); 
  const blastCircle=(e)=>{
    e.preventDefault()
    document.getElementById("circle").style.backgroundColor = "#2EC4B6"

    setTimeout(() => {
      Navigate("/verified")
    }, 1000);
    
    document.getElementById("circle").style.transform = "scale(100)"
    document.getElementById("circle").style.transition = "all 1s ease-out"
    document.getElementById("sidebar_wrapper").style.opacity = 0 
    document.getElementById("matchmingoText").style.opacity = 0 
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <>
    
       <div className="outer_signup" id='hobby'>
       
        <div className="col1" id="blurer">
        </div>
        <div className="col2">
          <div className="upper">
            <h2>Enter Your Hobbies</h2>
          </div>
          <div className="middle">
            <form action="">
              <input type="text" placeholder="Enter Your hobbies" />
              <input type="text" placeholder="Bio (optional )" />
              <button className="btn" id='testDiv' onClick={handleSubmit}>
              <button className='circle' id='circle' onClick={blastCircle}></button>
                <span>Next</span></button>
              <button className="btn" onClick={handleSlide} >Next</button>
              <button className="btn_back" onClick={handlebackwardSlide} >Back</button>
            </form>
          </div>
        </div>
      </div>  
    </>
  )
}


 
