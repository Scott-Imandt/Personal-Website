import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectCards.css"

function ProjectCards({ Project }) {
    return (
        Project.map(p => {
            return (
                <>
                    <div className={'projectOverviewContainer'}>
                        
                        <Link to={p.link} state={{data: p.title}}
                            onClick={()=>{
                                window.scroll({
                                    top: 0,
                                    left: 0,
                                    behavior: 'instant'
                                })
                            }}>
                        
                            <div className='projectOverviewTitle'>
                                <h1>{p.title}</h1>
                            </div>
                            <br></br>
                            <div className='details'>
                            
                            <div className='projectOverviewBody'>
                                <p>{p.details}</p>
                            </div>
                        

                        <div className='projectOverviewimg'>
                            <img src={p.imagesrc} alt ="Project Imgage"></img>
                        </div>

                        </div>
                        </Link>
                    </div>
                    
                </>
            )
        })
    )
}

export default ProjectCards