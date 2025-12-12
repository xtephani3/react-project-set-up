import './NavBanner.css'
import FacebookIcon from "../../assets/svgs/facebook.svg?react"
import XIcon from "../../assets/svgs/x.svg?react"
import SkypeIcon from "../../assets/svgs/skype.svg?react"
import LinkedinIcon from "../../assets/svgs/linkedin.svg?react"
import ClockIcon from "../../assets/svgs/clock.svg?react"
import LocationIcon from "../../assets/svgs/location.svg?react"
import ChevronIcon from "../../assets/svgs/chevron.svg?react"
import UKFlagIcon from "../../assets/svgs/ukflag.svg?react"







export function NavBanner() {
    return (
        <>
            <div className='nav-banner'>
                <div className='nav-banner_description-wrap'>
                    <span className='nav-banner_info-label nav-banner--vertical-line'><ClockIcon/><span>Working: Monday to Friday.9:am-5:pm</span></span>
                    <span className='nav-banner_info-label'> <LocationIcon/><span>Hudson Wisconsin(WI),54016</span></span>
                </div>

                <div className='nav-banner_socials-nav-wrap'>
                    <span className='nav-banner_language-options'><UKFlagIcon/><span>English</span><ChevronIcon/></span>
                    <div className='nav-banner_socials-wrap'>
                        <a className='nav-banner_socials' href='#'><FacebookIcon/></a>
                        <a className='nav-banner_socials' href='#'><XIcon/></a>
                        <a className='nav-banner_socials' href='#'><SkypeIcon/></a>
                        <a className='nav-banner_socials' href='#'><LinkedinIcon/></a>
                    </div>
                    <div className='nav-banner-socials_vertical-line'></div>
                </div>


            </div>
        </>
    )
}