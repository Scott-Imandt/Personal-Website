import React from 'react'
import ButtonLinks from './buttonLinks/ButtonLinks'
import Navbar from './navbar/Navbar'

function AboutMeHeader() {

    return (
        <div className="IndividualHeader">
            <Navbar></Navbar>
            <div className="maincontent">
                <h1 className="title-h1">{"About Me"}</h1>
                <h2 className="title-h2">{"Information About Me"}</h2>
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
            <div className='mainimg'>
                <img src={'./images/Other/Scott Imandt.png'} alt="Project Imgage"></img>
            </div>
        </div>
    )
}

export default AboutMeHeader