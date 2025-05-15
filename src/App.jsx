import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Importaciones de componentes
import Header from './components/Header'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Banner from './components/Banner'
import DynamicList from './components/DynamicList'
import { Box } from '@mui/material'

function App() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Banner />
      <DynamicList />
      <ContactForm />
      <Footer />
    </Box>
     

  )
}

export default App;

