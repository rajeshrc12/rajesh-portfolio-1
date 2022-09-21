import React, { useState } from 'react'
import { AiOutlineMenu, AiFillLinkedin, AiFillGithub,AiOutlineFilePdf } from "react-icons/ai";
import Resume from "../../assets/resume.pdf";
import { ImCross } from "react-icons/im";
import { Link } from "react-scroll";
import './navbar.css';
const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <ul className="social_link_container">
                <li style={{backgroundColor:"#0A66C2"}} className='social_link_li'><a target="_blank" rel="noreferrer" className='social_link' href="https://www.linkedin.com/in/rajesh-charhajari-91a831105/">LinkedIn<AiFillLinkedin size={30}/></a></li>
                <li style={{backgroundColor:"#333"}} className='social_link_li'><a target="_blank" rel="noreferrer" className='social_link' href="https://github.com/">GitHub<AiFillGithub size={30}/></a></li>
                <li style={{backgroundColor:"green"}} className='social_link_li'><a target="_blank" rel="noreferrer" className='social_link' href={Resume} download="rajesh_charhajari_resume.pdf">Resume<AiOutlineFilePdf size={30}/></a></li>
            </ul>
            <div className="navbar_container">
                <div className="logo">
                    R
                </div>
                <ul className='navbar_menu'>
                    <li className='navbar_menu_item'>
                        <Link to="home" smooth={true} duration={1500}>
                            Home
                        </Link>
                    </li>
                    <li className='navbar_menu_item'>
                        <Link to="skills" smooth={true} duration={1500}>
                            Skills
                        </Link>
                    </li>
                    <li className='navbar_menu_item'>
                        <Link to="works" smooth={true} duration={1500}>
                            Works
                        </Link>
                    </li>
                    <li className='navbar_menu_item'>
                        <Link to="contact" smooth={true} duration={1500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mobile_menu_btn" onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? <ImCross size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <ul className={mobileMenu ? 'mobile_menu' : "hide"}>
                <li className='mobile_menu_item'>
                    <Link onClick={() => setMobileMenu(!mobileMenu)} to="home" smooth={true} duration={1500}>
                        Home
                    </Link>
                </li>
                <li className='mobile_menu_item'>
                    <Link onClick={() => setMobileMenu(!mobileMenu)} to="skills" smooth={true} duration={1500}>
                        skills
                    </Link>
                </li>
                <li className='mobile_menu_item'>
                    <Link onClick={() => setMobileMenu(!mobileMenu)} to="works" smooth={true} duration={1500}>
                        works
                    </Link>
                </li>
                <li className='mobile_menu_item'>
                    <Link onClick={() => setMobileMenu(!mobileMenu)} to="contact" smooth={true} duration={1500}>
                        contact
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar