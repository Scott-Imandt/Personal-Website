import React from 'react'
import './PageCard.css'

function PageCard({ title, body, img }) {

    let image = ""
    let style = { display: "flex" }

    if (img !== "") {

        image = <img src={img} alt="Project Imgage"></img>
        style = { marginLeft: '0px', marginRight: '0px' }
    }

    if (body === "") {
        style = { display: "block" }
    }


    return (
        <>
            <div className='pageCardContainer'>

                <div className='cardBody'>
                    <div>
                        <div className='cardTitle'>
                            <h1>{title}</h1>
                        </div>
                        <br></br>
                        <p>{body}</p>
                    </div>
                    <div className='pageimage' style={style}>
                        {image}
                    </div>

                </div>
            </div>

        </>
    )
}

export default PageCard