import React from 'react'
import './CardContainer.css'

function CardContainer({title, Cards}) {

    const mystyle = {
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        justifyContent: "center",
    
      };


    return (
        <>
            <div className='cardProjectContainer'>

                <div className='cardContainerBody'>
                    <div>
                        <div className='cardProjectContainerTitle'>
                            <h1>{title}</h1>
                        </div>
                        
                        <div style={mystyle}>

                            {Cards}

                        </div>
                        

                    </div>
                    

                </div>
            </div>

        </>
    )
}

export default CardContainer