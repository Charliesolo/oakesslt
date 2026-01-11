import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
        <nav className="header-inner">
            <Link to='/'>
                <img className='logo' src={logo} alt="A green logo saying Oakes SLT 'Speech and Language Therapy' in a speech bubble" />
            </Link>
            <Link to='/'>
                <a>Home</a>
            </Link>
            <Link to='/services'>
                <a>Services</a>
            </Link>            
            <Link to='/testimonials'>
                <a>Testimonials</a>
            </Link>
            <Link to='/contact'>
                <a>Contact Us</a>
            </Link>
            
        </nav>
     </header>
  )
}

export default Header