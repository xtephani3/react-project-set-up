import './NavBanner.css'
import FacebookIcon from "../../assets/images/facebook.svg?react"
import XIcon from "../../assets/images/x.svg?react"
import SkypeIcon from "../../assets/images/skype.svg?react"
import LinkedinIcon from "../../assets/images/linkedin.svg?react"
import ClockIcon from "../../assets/images/clock.svg?react"
import LocationIcon from "../../assets/images/location.svg?react"





export function NavBanner() {
    return (
        <>
            <div className='nav-banner'>
                <div className='nav-banner_description-wrap'>
                    <span className='nav-banner_working-hours'><ClockIcon/>Working: Monday to Friday.9:am-5:pm</span>
                    <span className='nav-banner_location'> <LocationIcon/>Hudson Wisconsin(WI),54016</span>
                </div>

                <div className='nav-banner_socials-nav-wrap'>
                    <span className='nav-banner_language-options'>English</span>
                    <div className='nav-banner_socials-wrap'>
                        <a className='nav-banner_socials' href='#'><FacebookIcon/></a>
                        <a className='nav-banner_socials' href='#'><XIcon/></a>
                        <a className='nav-banner_socials' href='#'><SkypeIcon/></a>
                        <a className='nav-banner_socials' href='#'><LinkedinIcon/></a>
                    </div>
                </div>


            </div>
        </>
    )
}