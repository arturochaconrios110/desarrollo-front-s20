import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, CardMedia } from "@mui/material";

const ServicesDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const servicesItem = location.state?.servicesItem;

    const handleBack = () => {
        navigate('/');
    };

    if (!servicesItem) {
        return (
            <Container>
                <Typography variant="h4" gutterBottom>
                    No se encontró el servicio.
                </Typography>
                <Button variant="contained" onClick={handleBack}>
                    Volver
                </Button>
            </Container>
        );
    }
    
    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                    {servicesItem.nombre}
                </Typography>
                <br />
                <CardMedia
                    component="img"
                    sx={{ width: 500, display: 'block', margin: '0 auto' }}
                    image={servicesItem.image}
                />
                <br />
                <Typography variant="h5" gutterBottom>
                    {servicesItem.description}
                </Typography>
                <Button variant="contained" onClick={handleBack} sx={{ mt: 2 }}>
                    Volver
                </Button>


            </Box>
            <br />
        </Container>
    );  
}
export default ServicesDetail;
