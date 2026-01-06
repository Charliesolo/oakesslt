import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <nav className='grid-container'>
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
            
        </nav>
     </div>
  )
}

export default Header