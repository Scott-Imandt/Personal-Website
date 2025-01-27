import React from 'react'
import AboutMeHeader from '../AboutMeHeader'
import AboutMeBody from '../AboutMeBody'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ReactGA from "react-ga4";

function AboutMe() {

  const containerVarients = {
    hidden: {
      y: -600,

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
      y: -600,
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

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "AboutPage", title: "Personal Website" });
  }, [])

  return (
    <>
      <motion.div variants={containerVarients} initial="hidden" animate="visible" exit='exit'>
        <AboutMeHeader></AboutMeHeader>
        <motion.div variants={childVariants}>
          <AboutMeBody></AboutMeBody>
        </motion.div>
      </motion.div>

    </>
  )
}

export default AboutMe