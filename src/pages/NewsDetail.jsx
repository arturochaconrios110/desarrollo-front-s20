import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, CardMedia } from "@mui/material";

const NewsDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const newsItem = location.state?.newsItem;

    const handleBack = () => {
        navigate('/');
    };

    if (!newsItem) {
        return (
            <Container>
                <Typography variant="h4" gutterBottom>
                    No se encontró la noticia.
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
                <Typography variant="h4" gutterBottom>
                    {newsItem.title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {newsItem.description}
                </Typography>
                <CardMedia
                    component="img"
                    sx={{ width: 500, display: 'block', margin: '0 auto' }}
                    image={newsItem.image}   
                />
                <Button variant="contained" onClick={handleBack}>
                    Volver
                </Button>
            </Box>
            <br />

        </Container>
    );  
}
export default NewsDetail;
