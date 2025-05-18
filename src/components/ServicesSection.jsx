import {Box, Typography, Card, CardMedia, CardContent, Button, CardActions} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';

const ServicesSection = ({services}) => {
    const navigate = useNavigate();
    const handleTeadMore = (service) => {
        navigate('/services-detail', { state: { servicesItem: service } });
    };

    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" sx={{ mb:3, textAlign:'center'}} >
                NUMEROS MUNICIPALES
            </Typography>
            <Box sx={{ display: 'flex', flexDirection:'files', gap:2}}> 
                {services.map((service, index) => (
                    <Card key={index} sx={{ display:'flex', alignItems: 'center', justifyContent: 'space-between', mb:2 }}>
                        <CardMedia
                            component="img"
                            sx={{width:70}}
                            image={service.imagen}
                            alt={service.nombre}
                        />
                        <CardContent sx={{flex:1, textAlign:'center'}}>
                            <Typography variant="h6" sx={{fontWeight:'bold', mb:2}}>
                                {service.nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{mb:2}}>
                                {index + 1}. Proporcionamos este servicio para mejorar tu calidad de vida.
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
    );  
}
export default ServicesSection;
