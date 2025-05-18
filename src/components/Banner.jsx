import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import paisaje from '../assets/paisaje.jpg';
import { useNavigate } from 'react-router-dom';

const Banner = (banners) => {
const navigate = useNavigate();
    const handleTeadMore = (ban) => {
        navigate('/banners-detail', { state: { bannersItem:ban } });
    }
  return (
    <Box
      sx={{
        height: '60vh',
        position: 'relative',
        backgroundImage: `url(${paisaje})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Capa de transparencia */}
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
      {/* Contenido */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          padding: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Bienvenido a la Municipalidad de Cholchol
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Trabajamos para ti y tu comunidad.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Conoce más
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
