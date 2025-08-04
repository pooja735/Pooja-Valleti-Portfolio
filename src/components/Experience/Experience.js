import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience fade-in-on-scroll'>
      <h2 className='section__title text-reveal'>Experience</h2>
      
      <div className='experience__container'>
        {experience.map((exp, index) => (
          <div 
            key={uniqid()} 
            className={`experience__item card-entrance ${index % 2 === 0 ? 'slide-left-on-scroll' : 'slide-right-on-scroll'}`}
          >
            <div className='experience__header'>
              <h3 className='experience__title'>{exp.title}</h3>
              <div className='experience__company'>{exp.company}</div>
              <div className='experience__period'>{exp.period}</div>
            </div>
            
            <p className='experience__description'>{exp.description}</p>
            
            <div className='experience__technologies'>
              {exp.technologies.map((tech) => (
                <span key={uniqid()} className='experience__tech-tag hover-scale'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience 