import React from 'react'
import AboutMe from './component/about-me'
import { aboutMe, skills, professionalData, projectData } from "../data/page-data";
import Experience from './component/experience';
import Skills from './component/skills';
import Projects from './component/projects';

const page = () => {
  return (
    <div>
      <Skills data={skills} />
      <Experience data={professionalData} />
      <Projects data={projectData} />
      <AboutMe data={aboutMe}/>
    </div>
  )
}

export default page