import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <section className='about fade-in-on-scroll' id='about'>
      <div className='about__container'>
        <div className='about__hero card-entrance'>
          <div className='about__profile'>
            <div className='about__image-container'>
              <img 
                src='/profile-photo.jpg' 
                alt={`${name} - Professional Headshot`}
                className='about__image'
              />
            </div>
            <div className='about__content'>
              <p className='about__greeting text-reveal'>Hello, I'm</p>
              
              {name && (
                <h1 className='about__name text-reveal'>
                  {name}
                </h1>
              )}

              {role && <h2 className='about__role text-reveal'>{role}</h2>}
              
              <p className='about__desc text-reveal'>{description && description}</p>

              <div className='about__contact'>
                {resume && (
                  <a href={resume} target='_blank' rel='noopener noreferrer'>
                    <span type='button' className='btn btn--outline btn--animated'>
                      View Resume
                    </span>
                  </a>
                )}

                {social && (
                  <div className='about__social'>
                    {social.github && (
                      <a
                        href={social.github}
                        aria-label='github'
                        className='link link--icon hover-glow'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <GitHubIcon />
                      </a>
                    )}

                    {social.linkedin && (
                      <a
                        href={social.linkedin}
                        aria-label='linkedin'
                        className='link link--icon hover-glow'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
