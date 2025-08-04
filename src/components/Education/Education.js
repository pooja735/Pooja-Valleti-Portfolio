import uniqid from 'uniqid'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>
      
      <div className='education__container'>
        {education.map((edu) => (
          <div key={uniqid()} className='education__item'>
            <div className='education__header'>
              <h3 className='education__degree'>{edu.degree}</h3>
              <div className='education__institution'>{edu.institution}</div>
              <div className='education__period'>{edu.period}</div>
            </div>
            
            <div className='education__details'>
              <div className='education__gpa'>
                <span className='education__gpa-label'>GPA:</span>
                <span className='education__gpa-value'>{edu.gpa}</span>
              </div>
              
              <p className='education__description'>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education 