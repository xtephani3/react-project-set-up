import './NavHeader.css'
import { Button } from '../Buttons/Button'
import UserIcon from "../../assets/images/user.svg?react"
import SearchIcon from "../../assets/images/search.svg?react"



export function NavHeader() {
    return (
        <>
            <div className='nav-header-wrap'>
                <h2 className='nav-header_heading'>edunity</h2>
                <div className='nav-header_nav-wrap'>
                    <ul>
                        <li><a className='nav-header_links' href='#'>Home</a></li>
                        <li><a className='nav-header_links' href='#'>About-Us</a></li>
                        <li><a className='nav-header_links' href='#'>Courses</a></li>
                        <li><a className='nav-header_links' href='#'>Pages</a></li>
                        <li><a className='nav-header_links' href='#'>Blogs</a></li>
                        <li><a className='nav-header_links' href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className='nav-header_button-wrap'> 
                <SearchIcon/>
                <UserIcon/>
                <Button title='Contact' />

                </div>

            </div>

        </>
    )
}