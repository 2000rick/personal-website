import React from 'react'
import AboutMe from './component/about-me'
import { aboutMe, skills, professionalData } from "../data/page-data";
import Experience from './component/experience';
import Skills from './component/skills';

const page = () => {
  return (
    <div>
      <Skills data={skills} />
      <Experience data={professionalData} />
      <AboutMe data={aboutMe}/>
    </div>
  )
}

export default page