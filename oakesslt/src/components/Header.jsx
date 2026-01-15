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
                <p>Home</p>
            </Link>
            <Link to='/services'>
                <p>Services</p>
            </Link>            
            <Link to='/testimonials'>
                <p>Testimonials</p>
            </Link>
            <Link to='/contact'>
                <p>Contact Us</p>
            </Link>
            
        </nav>
     </header>
  )
}

export default Header