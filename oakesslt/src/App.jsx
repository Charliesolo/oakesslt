import RoutesComponent from './components/RoutesComponent'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {


  return (    
    <>
    <Header/>
    <main className='main-content'>
    <RoutesComponent/> 
    </main>
    <Footer/>
    </>
  )
}

export default App
