import React from 'react'
import ProjectCards from './ProjectCards'
import PersonalData from '../data/ProjectOverviewDataPersonal.json'
import CourseData from '../data/ProjectOverviewDataCourse.json'
import TechnicalData from '../data/ProjectOverviewDataTechnical.json'
import PageCard from './PageCard'
import { motion } from 'framer-motion'
import "./ProjectBody.css"

function ProjectsBody() {

  const childVariants = {
    hidden: {
      opacity: 0
    },

    visible: {
      opacity: 1,
      transition: {
        delay: 1.0,
        duration: 1
      }
    }

  }

  const mystyle = {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    justifyContent: "center",

  };


  return (
    <motion.div variants={childVariants} initial="hidden" animate="visible">
      <div>
        <PageCard title={"--Personal Projects--"} body={''} img={""}> </PageCard>

      </div>
      <div style={mystyle}>
        <ProjectCards Project={PersonalData}></ProjectCards>
      </div>
      <div>
        <PageCard title={"--Course Projects--"} body={''} img={""}> </PageCard>
      </div>
      <div style={mystyle}>
        <ProjectCards Project={CourseData}></ProjectCards>
      </div>
      <div>
        <PageCard title={"--Technical Projects--"} body={''} img={""}> </PageCard>
      </div>
      <div style={mystyle}>
        <ProjectCards Project={TechnicalData}></ProjectCards>
      </div>
    </motion.div>
  )
}

export default ProjectsBody