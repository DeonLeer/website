import React from 'react';
import About_Me from './About_Me';
import Experience from './Experience';
import Freelance_Services from './Freelance_Services';
import Projects from './Projects';
import Resume from './Resume';
import Social_Medias from './Social_Medias';

export default function Page() {

  return (
    <div className="Page">
      <About_Me />
      <Projects />
      <Resume />
      <Experience />
      <Freelance_Services />
      <Social_Medias />
    </div>
  )
}