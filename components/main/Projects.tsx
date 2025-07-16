import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <div
      className='flex flex-col items-center justify-center py-20'
      id="projects"
    >
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>My Projects</h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/NextWebsite.png'
          title='Mordern Next.js Portfolio Website'
          description='A personal portfolio website showcasing my skills and projects.'
        />
        <ProjectCard
          src='/CardImage.png'
          title='Intractive Card Component Website'
          description='A personal portfolio website showcasing my skills and projects.'
        />
        <ProjectCard
          src='/SpaceWebsite.png'
          title='Space Themed Website'
          description='A personal portfolio website showcasing my skills and projects.'
        />
        <ProjectCard
          src='/SpaceWebsite.png'
          title='Space Themed Website'
          description='A personal portfolio website showcasing my skills and projects.'
        />
      </div>
    </div>
  )
}

export default Projects
