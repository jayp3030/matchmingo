import landingPage01 from "../images/landingPage01.jpg"
import landingPage02 from "../images/landingPage02.jpg"
import landingPage03 from "../images/landingPage03.jpg"
import landingPage04 from "../images/landingPage04.jpg"
import landingPage05 from "../images/landingPage05.jpg"
import landingPage06 from "../images/landingPage06.jpg"
import landingPage07 from "../images/landingPage07.jpg"
import landingPage08 from "../images/landingPage08.jpg"
import landingPage09 from "../images/landingPage09.jpg"
import landingPage10 from "../images/landingPage10.jpg"
import landingPage11 from "../images/landingPage11.jpg"

export default function Landing_carousel() {

    return (
        <>
            <div className='landing_carousel' id='landing_carousel'>
                <div className='landing_carousel_wrapper'>
                    <div className='carousel_container' id="carousel_container">
                        <div className='type_a carousel_element'>
                            <div className='carousel_card'>
                                <img src={landingPage01}></img>
                            </div>
                        </div>
                        <div className='type_b carousel_element'>
                            <div className='carousel_card'>
                            <img src={landingPage02}></img>
                            </div>
                            <div className='carousel_card'>
                            <img src={landingPage03}></img>
                            </div>
                        </div>
                        <div className='type_a carousel_element'>
                            <div className='carousel_card'>
                            <img src={landingPage04}></img>
                            </div>
                        </div>
                        <div className='type_c carousel_element'>
                            <div className='carousel_card'>
                            <img src={landingPage05}></img>
                            </div>
                            <div className='carousel_card'>
                            <img src={landingPage06}></img>
                            </div>
                        </div>
                        <div className='type_a carousel_element mobileHide'>
                            <div className='carousel_card'>
                            <img src={landingPage07}></img>
                            </div>
                        </div>
                        <div className='type_b carousel_element mobileHide'>
                            <div className='carousel_card'>
                            <img src={landingPage08}></img>
                            </div>
                            <div className='carousel_card '>
                            <img src={landingPage09}></img>
                            </div>
                        </div>
                        <div className='type_a carousel_element mobileHide'>
                            <div className='carousel_card'>
                            <img src={landingPage10}></img>
                            </div>
                        </div>
                        <div className='type_c carousel_element mobileHide'>
                            <div className='carousel_card'>
                            <img src={landingPage11}></img>
                            </div>
                            <div className='carousel_card'>
                            <img src={landingPage03}></img>
                            </div>
                        </div>
                        <div className='type_a carousel_element'>
                            <div className='carousel_card'>
                                <img src={landingPage01}></img>
                            </div>
                        </div>
                        <div className='type_b carousel_element'>
                            <div className='carousel_card'>
                            <img src={landingPage02}></img>
                            </div>
                            <div className='carousel_card'>
                            <img src={landingPage03}></img>
                            </div>
                        </div>
                        <div className='type_a carousel_element'>
                            <div className='carousel_card'>
                            <img src={landingPage04}></img>
                            </div>
                        </div>
                        <div className='type_c carousel_element'>
                            <div className='carousel_card'>
                            <img src={landingPage05}></img>
                            </div>
                            <div className='carousel_card'>
                            <img src={landingPage06}></img>
                            </div>
                        </div>
                        <div className='type_a carousel_element mobileHide'>
                            <div className='carousel_card'>
                            <img src={landingPage07}></img>
                            </div>
                        </div>
                        <div className='type_b carousel_element mobileHide'>
                            <div className='carousel_card'>
                            <img src={landingPage08}></img>
                            </div>
                            <div className='carousel_card'>
                            <img src={landingPage09}></img>
                            </div>
                        </div>
                        <div className='type_a carousel_element mobileHide' >
                            <div className='carousel_card'>
                            <img src={landingPage10}></img>
                            </div>
                        </div>
                        <div className='type_c carousel_element mobileHide'>
                            <div className='carousel_card'>
                            <img src={landingPage11}></img>
                            </div>
                            <div className='carousel_card'>
                            <img src={landingPage03}></img>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>

    )
}
