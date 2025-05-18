import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Button, CardMedia } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const BannerDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bannerItem = location.state?.bannerItem;

    const handleBack = () => {
        navigate('/');
    };

    if (!bannerItem) {
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
            <Box sx={{ mt: 9 }}>
                <ImageList sx={{ width: 1200, height: 800 }}>
                    {bannerItem.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={<span>by: {item.author}</span>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Button variant="contained" onClick={handleBack} sx={{ mt: 2 }}>
                    Volver
                </Button>
            </Box>
            <br />
        </Container>
    );  
}
export default BannerDetail;