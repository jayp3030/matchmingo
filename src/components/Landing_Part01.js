import React from 'react'

export default function Landing_part01() {
  return (
    <>
        <div>
            <div className="outer">
                <div className="inner">
                    <h2 className="intro">Introducing</h2>
                    <h2 className="title">MatchMingo</h2>
                   {/* <video width='500' >
                    <source srcset="../videos/introvideo.mp4" type="video/mp4"/>
                    not supported */}
                   {/* </video> */}
                </div>
            </div>
            <div className="bottom">
            <i class="fa-regular fa-heart"></i>
                <h4>Scroll to find your match!</h4>
            </div>
        </div>
    </>
  )
}
