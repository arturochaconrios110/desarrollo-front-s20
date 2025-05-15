import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Importaciones de componentes

import Header from './components/Header'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Banner from './components/Banner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
       <Banner/>
      <ContactForm/>
      <Footer/>
     

    </>
  )
}

export default App
