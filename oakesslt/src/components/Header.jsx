import { useState } from 'react'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'

function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="site-header">
            <div className="header-inner">
                <Link to='/'>
                    <img className='logo' src={logo} alt="A green logo saying Oakes SLT 'Speech and Language Therapy' in a speech bubble" />
                </Link>
    
                <button  
                    className={`hamburger ${open ? "active" : ""}`}
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}>
                    <span />
                    <span />
                    <span />
                </button>
    
                <nav className={`nav ${open ? "nav-open" : ""}`}>
                    <Link to='/services' onClick={() => setOpen(false)}>Services</Link>            
                    <Link to='/testimonials' onClick={() => setOpen(false)}>Testimonials</Link>
                    <Link to='/contact' onClick={() => setOpen(false)}>Contact Us</Link>
                </nav>            
            </div>
         </header>
      )
    }

export default Header