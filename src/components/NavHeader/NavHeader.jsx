import './NavHeader.css'
import { Button } from '../Buttons/Button'
import UserIcon from "../../assets/svgs/user.svg?react"
import SearchIcon from "../../assets/svgs/search.svg?react"
import EdunityLogo from "../../assets/svgs/edunitylogo.svg?react"
import ChevronIcon from "../../assets/svgs/chevron.svg?react"



export function NavHeader() {
    return (
        <>
            <div className='nav-header-wrap'>
                <div className='nav-header_logo'>
                <EdunityLogo/>
                </div>
                <div className='nav-header_nav-wrap'>
                    <ul>
                        <li><a className='nav-header_links' href='#'><span>Home</span><ChevronIcon /> </a></li>
                        <li><a className='nav-header_links' href='#'><span>About-Us</span></a></li>
                        <li><a className='nav-header_links' href='#'><span>Courses</span><ChevronIcon /> </a></li>
                        <li><a className='nav-header_links' href='#'><span>Pages</span> <ChevronIcon /> </a></li>
                        <li><a className='nav-header_links' href='#'><span>Blogs</span><ChevronIcon /> </a></li>
                        <li><a className='nav-header_links' href='#'><span>Contact</span></a></li>
                    </ul>
                </div>
                <div className='nav-header_button-wrap'>
                    <SearchIcon />
                    <UserIcon />
                    <Button variant="primary">Contact</Button>
                </div>

            </div>

        </>
    )
}