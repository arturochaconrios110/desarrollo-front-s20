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

const banner=[
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
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

const news=[
  {title:'INAUGURACIÓN DE LA NUEVA PLAZA DE CHOLCHOL', description:'La nueva plaza de Cholchol fue inaugurada el pasado 15 de septiembre, con la presencia de autoridades locales y la comunidad.',image:plaza1},
  {title:'Municipio se compromete con la juventud y suscribe convenio "Compromiso Joven" con INJUV', description:'Con el objetivo de fortalecer las políticas públicas que permitan fomentar la participación de los jóvenes de la comuna de Cholchol, el municipio, liderado por el alcalde, Álvaro Labraña, llevó a cabo una importante firma de convenio con el Instituto Nacional de la Juventud (INJUV). Se trata de “compromiso joven” programa de INJUV que considera un plan de acompañamiento por dos años, el que tiene por objetivo generar un diagnóstico participativo con el fin de construir una estrategia municipal de juventud. En la ocasión, además, el municipio de Cholchol, sumó un nuevo hito al convertirse en el primer municipio en constituir durante este año 2025, la oficina municipal de la Juventud (OMJ), reafirmando con ello el compromiso de avanzar en el desarrollo de planes, programas y acciones que respondan a las reales necesidades e intereses de las y los jóvenes de Cholchol.',image:new2},
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
          <Banner banners={banner} />
          <ServicesSection services={arregloServicio} />
          <NewsSection news={news} />
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
