import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects fade-in-on-scroll'>
      <h2 className='section__title text-reveal'>Projects</h2>

      <div className='projects__grid stagger-container'>
        {projects.map((project, index) => (
          <div key={uniqid()} className='stagger-item'>
            <ProjectContainer project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
