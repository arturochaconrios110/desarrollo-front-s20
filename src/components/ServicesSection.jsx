import {Box, Typography, Card, CardMedia, CardContent, Button, CardActions} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import { useState, useRef } from 'react';

const ServicesSection = ({services}) => {
    const navigate = useNavigate();
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState('');
    const cardRef = useRef();
    const [showCarousel, setShowCarousel] = useState(false);

    // Agrupar los servicios de a 2
    const groupedServices = [];
    for (let i = 0; i < services.length; i += 2) {
        groupedServices.push(services.slice(i, i + 2));
    }
    const totalGroups = groupedServices.length;
    const [current, setCurrent] = useState(0);

    const handleTeadMore = (service) => {
        navigate('/services-detail', { state: { servicesItem: service } });
    };
    const handlePrev = () => {
        if (animating) return;
        setDirection('left');
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
            setAnimating(false);
        }, 350);
    };
    const handleNext = () => {
        if (animating) return;
        setDirection('right');
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
            setAnimating(false);
        }, 350);
    };

    return (
        <Box sx={{ my: 4 }}>
            <Button
                variant="contained"
                color="primary"
                sx={{ mb: 3, display: 'block', mx: 'auto' }}
                onClick={() => setShowCarousel((prev) => !prev)}
            >
                {showCarousel ? 'Ocultar Números Municipales' : 'Ver Números Municipales'}
            </Button>
            {showCarousel && (
                <Box sx={{ maxWidth: 700, mx: 'auto', mb: 4, position: 'relative', minHeight: 200, backgroundColor: '#e3f2fd', borderRadius: 2, boxShadow: 2 }}>
                    <Box
                      ref={cardRef}
                      sx={{
                        transition: animating ? 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s' : 'none',
                        transform:
                          animating && direction === 'right'
                            ? 'translateX(80px) scale(0.96)'
                            : animating && direction === 'left'
                            ? 'translateX(-80px) scale(0.96)'
                            : 'translateX(0) scale(1)',
                        opacity: animating ? 0.7 : 1,
                      }}
                    >
                      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                        {groupedServices[current].map((service, idx) => (
                          <Card key={idx} sx={{ display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-between', minHeight: 180, width: 300 }}>
                            <CardMedia
                                component="img"
                                sx={{width:70, mt:2}}
                                image={service.imagen}
                                alt={service.nombre}
                            />
                            <CardContent sx={{flex:1, textAlign:'center'}}>
                                <Typography variant="h6" sx={{fontWeight:'bold', mb:2}}>
                                    {service.nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{mb:2}}>
                                    {service.description || `${idx + 1}. Proporcionamos este servicio para mejorar tu calidad de vida.`}
                                </Typography>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button
                                        variant="contained"
                                        size="small" 
                                        color="primary"
                                        sx={{ textDecoration: 'none'}}
                                        onClick={() => handleTeadMore(service)}
                                    >
                                        Ver Más
                                    </Button>
                                </CardActions>
                            </CardContent>
                          </Card>
                        ))}
                      </Box>
                    </Box>
                    <Button onClick={handlePrev} sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }} disabled={animating}>&lt;</Button>
                    <Button onClick={handleNext} sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }} disabled={animating}>&gt;</Button>
                </Box>
            )}
            {showCarousel && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    {groupedServices.map((_, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                mx: 0.5,
                                backgroundColor: idx === current ? 'primary.main' : 'grey.400',
                                transition: 'background-color 0.3s',
                                cursor: 'pointer',
                                border: idx === current ? '2px solid #1976d2' : 'none',
                            }}
                            onClick={() => !animating && setCurrent(idx)}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );  
}
export default ServicesSection;
