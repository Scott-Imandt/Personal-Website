import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './navbar/Navbar'

function ProjectsHeader() {

    const containerVarients = {
        hidden: {
            y: -850,
        },

        visible: {
            y: 0,
            transition: { duration: .75, type: 'spring', stiffness: 60 }
        }
    }

    return (
        <motion.div variants={containerVarients} initial="hidden" animate="visible">
            <div className="Header" >
                <Navbar></Navbar>
                <h1 className="title-h1">Projects</h1>
                <h2 className="title-h2">Click on a project to view its details</h2>
                <div className="row">
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectsHeader