import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import "./ProjectCards.css"
import ProgramChip from './ProgramChips'


function ProjectCards({ Project }) {
    return (
        Project.map(p => {
            return (
                <motion.div key={p.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>
                    <div className={'projectOverviewContainer'}>

                        <Link to={p.link} state={{ data: p.title }}
                            onClick={() => {
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
                                    <div className='programChipContainer' style={{ display: "flex", flexWrap: "wrap" }}>
                                        {p.code && p.code.map(item => (

                                            <ProgramChip Name={item[0]} color={item[1]} key={item[2]}></ProgramChip>

                                        ))}
                                    </div>
                                </div>

                                <div className='projectOverviewimg'>
                                    <img src={p.imagesrc} alt="Project Imgage"></img>
                                </div>

                            </div>
                        </Link>
                    </div>
                </motion.div>
            )
        })
    )
}

export default ProjectCards