import React from 'react'
import './CardContainer.css'
import { motion } from 'framer-motion'

function CardContainer({ title, Cards }) {

    const mystyle = {
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        justifyContent: "center",

    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: -300,
    
        },
    
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: .20,
                duration: 1,
                type: 'spring',
                stiffness: 60,
            }
        },
        exit: {
            opacity: 0,
            y: -1000,
            transition: {
                duration: .3,
                type: 'tween',
    
            }
        }
    
    }


    return (
        <>
            <div className='cardProjectContainer'>

                <div className='cardContainerBody'>
                    <div>
                        <div className='cardProjectContainerTitle'>
                            <h1>{title}</h1>
                        </div>

                        <motion.div style={mystyle} variants={childVariants} initial="hidden" animate="visible" exit='exit'>

                            {Cards}

                        </motion.div>


                    </div>


                </div>
            </div>

        </>
    )
}

export default CardContainer