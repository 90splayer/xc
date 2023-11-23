'use client'

import Project from './ProjectCard';


const Projects = () => {

    const projects = [
        {
          title1: "VIBRATIONS",
          title2: "EP",
          src: "/images/vibrations.png",
          link: "https://fanlink.to/KampVibrations"
        },
        {
          title1: "JANITOR",
          title2: "ALBUM",
          src: "/images/janitor.png",
          link: 'https://fanlink.to/Kamp'
        },
        {
          title1: "BACK DOOR",
          title2: "EP",
          src: "/images/backdoor.jpg",
          link: 'https://on.soundcloud.com/mVb7v'
        },
        {
          title1: "AIRPLANE MODE",
          title2: "EP",
          src: "/images/air.png",
          link: "https://on.soundcloud.com/dbwNN"
        },
        {
          title1: "UNIVERSITY GEMS",
          title2: "EP",
          src: "/images/gems.png",
          link: "https://symphony.to/kamp/university-gems"
        },
      ] 
      
      return (
        <main id='projects' className='main py-16'>
          <div className='gallery'>
            <h1 className='ml-[10%] mb-4'>RELEASED PROJECTS</h1>
              {
                projects.map( (project, index) => {
                  return <Project key={index} project={project}/>
                })
              }
          </div>
        </main>
      )
}

export default Projects