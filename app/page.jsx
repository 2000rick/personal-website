import React from 'react'
import AboutMe from './component/about-me'
import { aboutMe, skills, professionalData, projectData } from "../data/page-data";
import Experience from './component/experience';
import Skills from './component/skills';

const page = () => {
  return (
    <div>
      <Skills data={skills} />
      <Experience data={professionalData} />
      <Experience data={projectData} />
      <AboutMe data={aboutMe}/>
    </div>
  )
}

export default page