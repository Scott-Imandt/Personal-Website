import React from 'react'
import SkillsBody from '../SkillsBody'
import SkillsHeader from '../SkillsHeader'
import { motion } from 'framer-motion'

function Skills() {

  const containerVarients = {
    hidden: {
        y: -570,

    },

    visible: {
        y: 0,

        transition: {
            duration: .75,
            type: 'spring',
            stiffness: 60,
            //when: "beforeChildren"
        }
    },
    exit: {
        y: -570,
        transition: {
            type: 'tween',
            duration: .3,
            delay: .20
        }

    }
}

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
      <motion.div variants={containerVarients} initial="hidden" animate="visible" exit='exit'>
        <SkillsHeader></SkillsHeader>

        <motion.div variants={childVariants}>

          <SkillsBody></SkillsBody>
        </motion.div>

      </motion.div>
    </>
  )
}

export default Skills