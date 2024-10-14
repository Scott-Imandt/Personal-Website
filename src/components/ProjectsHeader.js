import React from 'react'
import Navbar from './navbar/Navbar'

function ProjectsHeader() {

    

    return (
        <>
            <div className="Header" >
                <Navbar></Navbar>
                <h1 className="title-h1">Projects</h1>
                <h2 className="title-h2">Click on a project to view its details</h2>
                <div className="row">
                </div>
            </div>
        </>
    )
}

export default ProjectsHeader