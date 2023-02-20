import React from 'react'

export default function Hobby() {

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
              <button className="btn" >Next</button>
            </form>
          </div>
        </div>
      </div>  
    </>
  )
}
