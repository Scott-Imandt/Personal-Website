import React from 'react'
import ButtonLinks from './buttonLinks/ButtonLinks'
import './IndividualHeader.css'
import Navbar from './navbar/Navbar'
import {motion} from 'framer-motion'

function IndividualHeader({ projectName, subtitle, mainImage, githublink }) {

    const containerVarients = {
        hidden: {
            y: -850,
        },

        visible: {
            y: 0,
            transition: { duration: .75, type: 'spring', stiffness: 60 }
        }
    }
    
    let gihublinkcomponent = ""
    let img = ""

    if (githublink !== "") {

        gihublinkcomponent =
            <div className='Buttons'>
                <ButtonLinks
                    image={'./Personal-Website/images/Homepage/githubicon.svg'}
                    onError={'./images/Homepage/githubicon.svg'}
                    buttonLink={githublink}
                    title={"Github Icon"}
                />
            </div>
    }

    if(mainImage !== ""){
        img = <img src={mainImage} alt="Project Imgage"></img>
    }
 

    return (
        <motion.div className="IndividualHeader" variants={containerVarients} initial="hidden" animate="visible">
            <Navbar></Navbar>
            <div className="maincontent">
                <h1 className="title-h1">{projectName}</h1>
                <h2 className="title-h2">{subtitle}</h2>
                <div className="row">
                    {gihublinkcomponent}
                </div>
            </div>
            <div className='mainimg'>
                {img}
            </div>
        </motion.div>
    )
}

export default IndividualHeader