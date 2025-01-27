import React from 'react'
import ProjectsHeader from '../ProjectsHeader'
import ProjectsBody from '../ProjectsBody'
import { motion } from 'framer-motion'
import ReactGA from "react-ga4";
import { useEffect } from 'react';

function Projects() {

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
    ReactGA.send({ hitType: "pageview", page: "ProjectPage", title: "Personal Website" });
  }, [])

  return (
    <>
      <motion.div variants={containerVarients} initial="hidden" animate="visible" exit="exit">
        <ProjectsHeader></ProjectsHeader>

        <motion.div variants={childVariants}>
          <ProjectsBody></ProjectsBody>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Projects