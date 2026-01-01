import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Services from './Services'

function RoutesComponent() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path='/*' element={<Home/>}/> 
    </Routes>
  )
}

export default RoutesComponent