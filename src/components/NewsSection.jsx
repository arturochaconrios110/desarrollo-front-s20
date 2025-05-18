import { Box, Typography, Card, CardContent, CardActions, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import resultadobeca from "../assets/resultados de beca.jpg";
import resultado1 from "../assets/resultado1.jpg";
import resultado2 from "../assets/resultado2.jpg";
import resultado3 from "../assets/resultado3.jpg";  
import resultado4 from "../assets/resultado4.jpg";
import resultado5 from "../assets/resultado5.jpg";
import taller from "../assets/taller.jpg";
import bus from "../assets/bus.jpg";
import permiso from "../assets/permiso.jpeg";
import { useState } from "react";
import NewsCarousel from "./NewsCarousel";

const NewsSection = ({ news }) => { 
    const navigate = useNavigate();
    const [showNews, setShowNews] = useState(false);
    const [showCarousel, setShowCarousel] = useState(false);
    const becaImages = [resultado1, resultado2, resultado3, resultado4, resultado5];

    const [becaIndex, setBecaIndex] = useState(0);
    const handlePrevBeca = () => setBecaIndex((prev) => (prev === 0 ? becaImages.length - 1 : prev - 1));
    const handleNextBeca = () => setBecaIndex((prev) => (prev === becaImages.length - 1 ? 0 : prev + 1));

    const handleReadMore = (item) => {
        navigate('/news-detail', { state: { newsItem:item } });
    }

    // Si no se recibe la prop news, usar un arreglo vacío para evitar errores y mostrar mensaje
    const newsList = Array.isArray(news) ? news : [
        {
            title: 'Taller de Capacitación Municipal',
            description: 'Se realizó un exitoso taller de capacitación para funcionarios municipales, enfocado en la atención ciudadana y mejora de procesos.',
            image: taller
        },
        {
            title: 'Nuevo Bus para la Comunidad',
            description: 'La municipalidad ha adquirido un nuevo bus para el transporte de los vecinos, mejorando la conectividad y el acceso a servicios.',
            image: bus
        },
        {
            title: 'Permiso de Circulación 2025',
            description: 'Ya puedes renovar tu permiso de circulación 2025 en la municipalidad. Acércate a nuestras oficinas o realiza el trámite en línea.',
            image: permiso
        }
    ];

    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                sx={{ mb: 3, display: 'block', mx: 'auto' }}
                onClick={() => setShowNews((prev) => !prev)}
            >
                {showNews ? 'Ocultar Noticias' : 'Ver Noticias de Cholchol'}
            </Button>
            {showNews && (
                <>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                        <img src={resultadobeca} alt="Resultado Beca" style={{ maxWidth: 400, borderRadius: 8, boxShadow: '0 2px 8px #0002', marginBottom: 16 }} />
                        {/* Carrusel de imágenes de resultados de beca */}
                        <Box sx={{ position: 'relative', width: 400, height: 300, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e3f2fd', borderRadius: 2, boxShadow: '0 2px 8px #0001' }}>
                            <Button onClick={handlePrevBeca} sx={{ position: 'absolute', left: 0, minWidth: 5, height: '100%', zIndex: 1 }}>&lt;</Button>
                            <img src={becaImages[becaIndex]} alt={`Resultado ${becaIndex+1}`} style={{ maxWidth: 400, maxHeight: 600, borderRadius: 8, objectFit: 'contain' }} />
                            <Button onClick={handleNextBeca} sx={{ position: 'absolute', right: 0, minWidth: 32, height: '100%', zIndex: 1 }}>&gt;</Button>
                            {/* Paginación visual */}
                            <Box sx={{ position: 'absolute', bottom: 8, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 1 }}>
                                {becaImages.map((_, idx) => (
                                    <Box key={idx} sx={{ width: 10, height: 10, borderRadius: '50%', background: becaIndex === idx ? '#1976d2' : '#90caf9', transition: 'background 0.2s' }} />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    {showCarousel && (
                        <>
                            <Typography variant="h4" sx={{ mb:3, textAlign:'center'}} >
                                NOTICIAS DE CHOLCHOL
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection:'column', gap:3, alignItems: 'center' }}>
                                {newsList.length > 0 ? (
                                    <NewsCarousel news={newsList} />
                                ) : (
                                    <Typography variant="body1" color="text.secondary">No hay noticias disponibles.</Typography>
                                )}
                            </Box>
                        </>
                    )}
                    {!showCarousel && (
                        <>
                            <Typography variant="h4" sx={{ mb:3, textAlign:'center'}} >
                                NOTICIAS DE CHOLCHOL
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection:'column', gap:3}}>
                                {newsList.length > 0 ? (
                                    newsList.map((item, index) => (
                                        <Card key={index} sx={{ mb: 2 }}>
                                            <CardContent>
                                                <Typography variant="h6"> {item.title}</Typography>
                                                {/* Mostrar contenido de la noticia si existe */}
                                                {(item.content || item.description) && (
                                                    <Typography variant="body2" sx={{mb:2}}>{item.content || item.description}</Typography>
                                                )}
                                                {/* Mostrar imagen si existe */}
                                                {item.image && (
                                                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                                                        <img src={item.image} alt={item.title} style={{ maxWidth: 320, borderRadius: 8 }} />
                                                    </Box>
                                                )}
                                            </CardContent>
                                            {/* Botón Leer más si hay más detalles */}
                                            <CardActions sx={{ justifyContent: 'center' }}>
                                                <Button
                                                    variant="contained"
                                                    size="small"
                                                    color="primary"
                                                    sx={{ textDecoration: 'none'}}
                                                    onClick={() => handleReadMore(item)}
                                                >
                                                    Leer más
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    ))
                                ) : (
                                    <Typography variant="body1" color="text.secondary">No hay noticias disponibles.</Typography>
                                )}
                            </Box>
                        </>
                    )}
                </>
            )}
        </Box>
    )
}
export default NewsSection;