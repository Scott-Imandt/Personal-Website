import React from 'react'
import ProjectCards from './ProjectCards'
import PersonalData from '../data/ProjectOverviewDataPersonal.json'
import CourseData from '../data/ProjectOverviewDataCourse.json'
import TechnicalData from '../data/ProjectOverviewDataTechnical.json'
import PageCard from './PageCard'
import "./ProjectBody.css"

function ProjectsBody() {

  const mystyle = {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    justifyContent: "center",

  };


  return (
    <>
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
    </>
  )
}

export default ProjectsBody