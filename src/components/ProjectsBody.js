import React from 'react'
import ProjectCards from './ProjectCards'
import PersonalData from '../data/ProjectOverviewDataPersonal.json'
import CourseData from '../data/ProjectOverviewDataCourse.json'
import TechnicalData from '../data/ProjectOverviewDataTechnical.json'
import CardContainer from './CardContainer'
//import "./ProjectBody.css"

function ProjectsBody() {

  return (
    <>

      <CardContainer title={"--Personal Projects--"} Cards={<ProjectCards Project={PersonalData} />}></CardContainer>

      <CardContainer title={"--Course Projects--"} Cards={<ProjectCards Project={CourseData} />}> </CardContainer>

      <CardContainer title={"--Technical Projects--"} Cards={<ProjectCards Project={TechnicalData} />}> </CardContainer>

    </>
  )
}

export default ProjectsBody