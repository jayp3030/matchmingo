import { useEffect } from "react"




export default function Landing_part01() {
    const scrollDown=()=>{
        window.scrollTo(0,2000)
    }
    
    useEffect(() => {
        setTimeout(() => {
            scrollDown()
        }, 2200);
      
    }, [])
    return (
        <>
            <div className='landing_part01'>
                <div className="outer">
                    <div className='demoDiv'></div>
                    <div className="inner">
                        <h2 className="intro">Introducing</h2>
                        <h2 className="title" id='title'>MatchMingo</h2>
                    </div>
                    {/* <div className='bottom'>
                            <i class="fa-regular fa-heart"></i>
                            <p>Scroll to find your match!</p>
                        </div> */}
                </div>
            </div>
        </>
    )
}
