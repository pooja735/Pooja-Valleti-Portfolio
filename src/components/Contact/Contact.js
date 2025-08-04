import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { contact, about } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact fade-in-on-scroll' id='contact'>
      <h2 className='section__title text-reveal'>Get In Touch</h2>
      
      <div className='contact__container'>
        <div className='contact__card card-entrance'>
          <p className='contact__subtitle text-reveal'>
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
          
          <a href={`mailto:${contact.email}`} className='contact__email hover-scale'>
            <EmailIcon style={{ marginRight: '0.5rem' }} />
            {contact.email}
          </a>
          
          <div className='contact__button'>
            <a href={`mailto:${contact.email}`}>
              <span type='button' className='btn btn--outline btn--animated'>
                Send Message
              </span>
            </a>
          </div>
          
          {about.social && (
            <div className='contact__social'>
              {about.social.github && (
                <a
                  href={about.social.github}
                  aria-label='github'
                  className='contact__social-link hover-glow'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GitHubIcon />
                </a>
              )}

              {about.social.linkedin && (
                <a
                  href={about.social.linkedin}
                  aria-label='linkedin'
                  className='contact__social-link hover-glow'
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
    </section>
  )
}

export default Contact
