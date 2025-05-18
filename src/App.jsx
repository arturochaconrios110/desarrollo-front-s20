import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Box} from '@mui/material'

//Importaciones de componentes
import Header from './components/Header'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import NewsSection from './components/NewsSection'
import plaza1 from './assets/plaza1.jpg'
import new2 from './assets/new2.jpg'
import channels4_profile from './assets/channels4_profile.jpg'
import atencion from './assets/atencion.png'
import medioamb from './assets/medioamb.jpg'
import centrocultural from './assets/centrocultural.jpg'
import obras from './assets/obras.jpg'
import salud from './assets/salud.jpg'
import educacion from './assets/educacion.jpg'

//IMPORTAR PAGES
import NewsDetail from './pages/NewsDetail'
import ServicesDetail from './pages/ServicesDetail'
import BannerDetail from './pages/BannerDetail' // Eliminar o comentar si no se usa

function App() {

const bannerr = [
  {
    img: 'https://municholchol.cl/images/960/14642492/alcalde.jpg',
    title: 'Alcade',
    author: 'ÁLVARO LABRAÑA OPAZO',
  },
  {
    img: 'https://municholchol.cl/images/2048/14633392/portada-concejo-2024-2028.jpg',
    title: 'Consejo Municipal',
    author: 'Alcande y Concejales',
    
  },
  
];

const arregloServicio = [
  { nombre: 'Atención al ciudadano', imagen: channels4_profile, imagenExtra: atencion, description: 'Informaciones Fono: +56 4 5273 4200 ' },
  { nombre: 'Gestión de Residuos', imagen: channels4_profile, imagenExtra: medioamb, description: 'Informaciones Fono: +56 4 5273 4208 '  },
  { nombre: 'Actividades Culturales', imagen: channels4_profile, imagenExtra: centrocultural, description: 'Informaciones Fono: +56 4 5273 4218 '   },
  { nombre: 'Mantenimiento de Espacios Públicos', imagen: channels4_profile, imagenExtra: obras, description: 'Informaciones Fono: +56 4 5273 4213 ' },
  { nombre: 'Servicios de Salud', imagen: channels4_profile, imagenExtra: salud, description: 'Informaciones Fono urgencia: +56 4 5273 4277 - Fono Some:+56 4 5273 4275' },
  { nombre: 'Educación y Capacitación', imagen: channels4_profile, imagenExtra: educacion, description: 'Informaciones Fono: +56 4 5273 4220 '  },
];

return (
  <Router>
    <Routes>
      <Route path="/" element={
        <Box
          sx={{
            flexDirection: 'column',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh',
            width: '100%',
          }}>
          <Header />
          <Banner banners={bannerr} />
          <ServicesSection services={arregloServicio} />
          <NewsSection />
          <ContactForm />
          <Footer />
        </Box>
      } />
      <Route path="/news-detail" element={
        <Box
          sx={{
            flexDirection: 'column',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh',
            width: '100%',
          }}>
          <Header />
          <NewsDetail />
          <Footer />
        </Box>
      } />
      <Route path="/services-detail" element={
        <Box
          sx={{
            flexDirection: 'column',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh',
            width: '100%',
          }}>
          <Header />
          <ServicesDetail />
          <Footer />
        </Box>
      } />
    </Routes>
  </Router>
);
}

export default App;
