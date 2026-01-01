import asltip from '../assets/ASLTIP-logo.jpg'
import hcpc from '../assets/hcpc.png'
import rcslt from '../assets/RCSLT.jpg'

export default function Footer() {
  return (
    <div className='grid-container-footer'>
        <img className='logo-footer' id='footer1' src={asltip} alt="ASLTIP Logo" />
        <img className='logo-footer' id='footer2' src={hcpc} alt="ASLTIP Logo" />
        <img className='logo-footer'id='footer3' src={rcslt} alt="ASLTIP Logo" />
    </div>
  )
}
