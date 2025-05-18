import React from 'react';
import { Box, Typography, Button, ImageList, ImageListItem, ImageListItemBar, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails, CardMedia } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import paisaje from '../assets/paisaje.jpg';
import turismo2 from '../assets/turismo2.jpg';
import valneario from '../assets/valneario.jpg';
import turismo1 from '../assets/turismo1.jpg';
import alcalde from '../assets/alcalde.jpg';
import concejo from '../assets/concejo.jpg';
import organigrama from '../assets/organigrama.jpg';
import { useNavigate } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Banner = ({ banners }) => {
  const [showGallery, setShowGallery] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleTeadMore = (ban) => {
    navigate('/banners-detail', { state: { bannersItem: ban } });
  };
  const handleBack = () => {
    setShowGallery(false);
    setValue(0); // Al volver, resetea el tab a la galería
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          height: showGallery ? 'auto' : '60vh',
          position: 'relative',
          backgroundImage: `url(${paisaje})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          py: 4,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Bienvenido a la Municipalidad de Cholchol
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Trabajamos para ti y tu comunidad.
          </Typography>
          {!showGallery && (
            <Button variant="contained" color="primary" size="large" onClick={() => setShowGallery(true)}>
              Conoce más
            </Button>
          )}
          {showGallery && (
            <>
              <Box sx={{ borderBottom: 2, borderColor: 'divider', color: 'primary', mb: 1, backgroundColor: '#e3f2fd', maxWidth: 670, mx: 'auto', borderRadius: 2, boxShadow: 2 }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Autoridades Municipales" {...a11yProps(0)} />
                  <Tab label="Historia de Cholchol" {...a11yProps(1)} />
                  <Tab label="Organigrama Municipal" {...a11yProps(2)} />
                </Tabs>
               </Box>
              <CustomTabPanel value={value} index={0}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">Autoridades Municipales</Typography>
                  </AccordionSummary>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, gap: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={alcalde}
                        alt="Alcalde"
                        sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 400 }}
                      />
                      <Typography variant="subtitle1" sx={{ mt: 1, color: '#222' }}>
                        Alcalde
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#222' }}>
                        ÁLVARO LABRAÑA OPAZO
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <CardMedia
                        component="img"
                        height="300"
                        image={concejo}
                        alt="Concejo Municipal"
                        sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 400 }}
                      />
                      <Typography variant="subtitle1" sx={{ mt: 1, color: '#222' }}>
                        Concejales
                      </Typography>
                      <Box component="ul" sx={{ color: '#222', textAlign: 'left', pl: 2, m: 0 }}>
                        <li>BERNARDITA VISCARRA ASTUDILLO</li>
                        <li>DIEGO MILLAO COLLIO</li>
                        <li>ISMAEL CAYUL COÑUENAO</li>
                        <li>ALEJANDRA NATALY MELLICO CONTRERAS</li>
                        <li>ANDRÉS NAVARRETE PAINEMAL</li>
                        <li>GONZALO TROPA HUIRCALAF</li>
                      </Box>
                    </Box>
                  </Box>
              </Accordion>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">Historia de Cholchol</Typography>
                  </AccordionSummary>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, gap: 2 }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={turismo2}
                      alt="Río Cholchol"
                      sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 400 }}
                    />
                    <CardMedia
                      component="img"
                      height="300"
                      image={valneario}
                      alt="Balneario Cholchol"
                      sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 400 }}
                    />
                     <CardMedia
                      component="img"
                      height="300"
                      image={turismo1}
                      alt="Balneario Cholchol"
                      sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 400 }}
                    />
                  </Box>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ color: '#222', textAlign: 'justify', whiteSpace: 'pre-line' }}>
                      Chol Chol o Cholchol (Mapudungún: Lugar de Cardos) es un pueblo y comuna de la zona sur de Chile, de la provincia de Cautín en la región de La Araucanía creada por ley 19.944 del 22 de abril de 2004 al segregarse de la comuna de Nueva Imperial.
                      
                      Limita al norte con las comunas de Galvarino y Lumaco, al este con la de Temuco, al oeste con la Comuna de Carahue y al sur con la Comuna de Nueva Imperial.
                      
                      <b>Siglo XIX</b>
                      Durante el proceso de ocupación de la Araucanía, el 4 de noviembre de 1881 ocurrió una sublevación Mapuche de la zona de Cholchol, Imperial y Toltén. Entre los días 5 y 6, un grupo de alrededor de 400 hombres atacó el fuerte de Lumaco, el que fue rechazado por una compañía del batallón Ñuble.
                      
                      El Coronel Gregorio Urrutia, jefe de las fuerzas de la Frontera, que se encontraba en Santiago, al enterarse del levantamiento indígena, regresó en tren expreso hasta Angol. Al llegar, se dirigió de inmediato a Traiguén, junto a una columna de 400 hombres, cuando llegó al lugar en que estuvo asentada la antigua ciudad de La Imperial. Se reunieron ahí con otros 250 hombres que venían desde Temuco por el camino de Cautín, además de las fuerzas de Cañete, Lebu, Tomé y Talcahuano venidas desde la costa.
                      
                      Los Mapuches se movían por los campos apropiándose de animales, saqueando las misiones, incendiando casas y ajusticiando.
                      
                      El Coronel Urrutia al llegar a Cholchol el día 10 de noviembre, dio instrucciones de construir un fuerte en la misma ruca del toqui Ancamilla, cumpliendo así la amenaza que había hecho de antemano al cabecilla indígena. El 22 de aquel mes se iniciaron los trabajos, dando así comienzo al pueblo que se estableció más tarde con el mismo nombre de Cholchol.
                      
                      En 1896, un grupo de cuatro misioneros anglicanos de la Sociedad Misionera de América del Sur, liderados por el hijo de Allen F. Gardiner, Allen W. Gardiner y por el canadiense Charles Sadleir, llegó a Cholchol con el objetivo de ampliar la Misión Araucanía que había sido iniciada en la localidad de Quepe, dirigidos por el pastor William Wilson como superintendente de la misión.
                      
                      En 1898 fue establecida la primera escuela con internado de la localidad, lo que permitió la alfabetización de las comunidades Mapuches locales — en una época con altos índices de pobreza extrema y analfabetismo, para luego educarlos en competencias agrícolas e industriales, impartiendo clases en idioma mapuche y español. Asimismo, construyeron la Iglesia Anglicana La Ascensión, perteneciente en la actualidad a la Iglesia Anglicana de Chile y luego en 1933, inauguraron el primer Hospital de Cholchol.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">Organigrama Municipal</Typography>
                  </AccordionSummary>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, gap: 2 }}>
                    <CardMedia
                      component="img"
                      height="500"
                      image={organigrama}
                      alt="Organigrama Municipal"
                      sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 800 }}
                    />
                  </Box>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ color: '#222', textAlign: 'center' }}>
                      Organigrama Municipal
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CustomTabPanel>
            </>
          )}
          {showGallery && (
            <Button variant="contained" onClick={handleBack} sx={{ mt: 2 }}>
              Volver
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Banner;
