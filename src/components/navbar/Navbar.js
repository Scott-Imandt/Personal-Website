import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollup = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }

    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={() => {closeMobileMenu(); scrollup();}}>
                        Scott Imandt
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={() => {closeMobileMenu(); scrollup();}}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Projects' className='nav-links' onClick={() => {closeMobileMenu(); scrollup();}}>Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Aboutme' className='nav-links' onClick={() => {closeMobileMenu(); scrollup();}}>About Me</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Skills' className='nav-links' onClick={() => {closeMobileMenu(); scrollup();}}>Skills</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar