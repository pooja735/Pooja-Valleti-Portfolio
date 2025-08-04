import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header'>
      <div className='header__container'>
        <h3 className='header__logo'>
          {homepage ? (
            <a href={homepage} className='link'>
              {title || 'PV'}
            </a>
          ) : (
            title || 'PV'
          )}
        </h3>
        <nav className='header__nav'>
          <Navbar />
        </nav>
      </div>
    </header>
  )
}

export default Header
