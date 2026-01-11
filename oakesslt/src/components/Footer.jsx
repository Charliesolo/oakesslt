import asltip from '../assets/ASLTIP-logo.jpg'
import hcpc from '../assets/hcpc.png'
import rcslt from '../assets/RCSLT.jpg'

export default function Footer() {
  return (
    <div className='grid-container-footer'>
        <img className='logo-footer' src={asltip} alt="ASLTIP Logo" />
        <img className='logo-footer' src={hcpc} alt="ASLTIP Logo" />
        <img className='logo-footer' src={rcslt} alt="ASLTIP Logo" />
    </div>
  )
}
