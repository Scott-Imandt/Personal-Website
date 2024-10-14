import React from 'react'
import Navbar from './navbar/Navbar'
import { motion } from 'framer-motion'

function SkillsHeader() {

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
        <motion.div className="Header" variants={containerVarients} initial="hidden" animate="visible">
            <Navbar></Navbar>
            <h1 className="title-h1">Skills</h1>
            <h2 className="title-h2">Skills I have acquired over time</h2>
            <div className="row">
            </div>
        </motion.div>
    )
}

export default SkillsHeader