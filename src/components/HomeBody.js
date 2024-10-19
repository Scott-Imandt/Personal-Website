import React from 'react'
import HomeTitleCard from './HomeTitleCard'
import { motion } from 'framer-motion'
import './HomeBody.css'

function HomeBody() {


    return (
        <>
            <div className='HomeTitleCardContainer'>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>
                    <HomeTitleCard Title={"Projects"} link={"/Projects"} body={"Click the tile to view some of my projects I created over the years."}></HomeTitleCard>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>
                    <HomeTitleCard Title={"About Me"} link={"/AboutMe"} body={"Click the tile to see who I am, what education I have, and where do I work."}></HomeTitleCard>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: .95 }}>
                    <HomeTitleCard Title={"Skills"} link={"/Skills"} body={"Click the tile to see what skills I have acquired over the years."}></HomeTitleCard>
                </motion.div>
            </div>
        </>
    )
}

export default HomeBody