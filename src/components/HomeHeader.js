import React from 'react'
import ButtonLinks from './buttonLinks/ButtonLinks'
import './HomeHeader.css'
import Navbar from './navbar/Navbar'
//import { motion } from 'framer-motion'

function Header() {
    return (
        <div className="Header">
            <Navbar></Navbar>
            <h1 className="title-h1">Scott Imandt</h1>
            <h2 className="title-h2">Computer Science Major</h2>
            <div className="row">
                <div className="Buttons">

                    <ButtonLinks
                        image={'./Personal-Website/images/Homepage/githubicon.svg'}
                        onError={'./images/Homepage/githubicon.svg'}
                        buttonLink={'https://github.com/Scott-Imandt'}
                        title={"Github Icon"}
                    />
                    <ButtonLinks
                        image={'./Personal-Website/images/Homepage/mailicon.svg'}
                        onError={'./images/Homepage/mailicon.svg'}
                        buttonLink={'mailto: ScottImandt@gmail.com'}
                        title={"Mail Icon"}
                    />

                    <ButtonLinks
                        image={'./Personal-Website/images/Homepage/linkedinicon.svg'}
                        onError={'./images/Homepage/linkedinicon.svg'}
                        buttonLink={'https://www.linkedin.com/in/scott-imandt/'}
                        title={"Linkedin Icon"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header