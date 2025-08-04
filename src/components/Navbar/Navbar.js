import { useContext } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, experience, education, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)

  return (
    <nav className='center nav'>
      <ul className='nav__list'>
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {experience.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              className='link link--nav'
            >
              Experience
            </a>
          </li>
        ) : null}

        {education.length ? (
          <li className='nav__list-item'>
            <a
              href='#education'
              className='link link--nav'
            >
              Education
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </nav>
  )
}

export default Navbar
