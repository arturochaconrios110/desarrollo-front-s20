import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Importaciones de componentes
import Header from './components/Header'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import Banner from './components/Banner'
import ServicesSection from './components/ServicesSection'
import NewsSection from './components/NewsSection'
import plaza1 from './assets/plaza1.jpeg';
import new2 from './assets/new2.jpg';



function App() {

const arregloServicio =[
  'Atención al ciudadano',
  'Gestión de Residuos',
  'Actividades Culturales',
  'Mantenimiento de Espacios Públicos', 
  'Servicios de Salud',
  'Educación y Capacitación',
];
const news=[
  {title:'Nueva plaza inaururada', description:'La nueva plaza de Cholchol fue inaugurada el pasado 15 de septiembre, con la presencia de autoridades locales y la comunidad.',image:plaza1},
  {title:'Municipio se compromete con la juventud y suscribe convenio "Compromiso Joven" con INJUV', description:'Con el objetivo de fortalecer las políticas públicas que permitan fomentar la participación de los jóvenes de la comuna de Cholchol, el municipio, liderado por el alcalde, Álvaro Labraña, llevó a cabo una importante firma de convenio con el Instituto Nacional de la Juventud (INJUV). Se trata de “compromiso joven” programa de INJUV que considera un plan de acompañamiento por dos años, el que tiene por objetivo generar un diagnóstico participativo con el fin de construir una estrategia municipal de juventud. En la ocasión, además, el municipio de Cholchol, sumó un nuevo hito al convertirse en el primer municipio en constituir durante este año 2025, la oficina municipal de la Juventud (OMJ), reafirmando con ello el compromiso de avanzar en el desarrollo de planes, programas y acciones que respondan a las reales necesidades e intereses de las y los jóvenes de Cholchol.',image:new2},
 
];

  return (
    <>
      <Header />
      <Banner />
      <ServicesSection services={arregloServicio} />
      <NewsSection news={news} />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
