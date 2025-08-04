import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills fade-in-on-scroll' id='skills'>
      <h2 className='section__title text-reveal'>Skills</h2>
      <ul className='skills__list stagger-container'>
        {skills.map((skill, index) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain stagger-item hover-lift'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
