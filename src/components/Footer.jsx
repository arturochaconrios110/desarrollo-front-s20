import {Box, Typography} from '@mui/material';

// Footer component
const Footer = () => {
    return (

        <Box sx={{ backgroundColor: '#333', color: '#fff', py: 2, textAlign: 'center' }}>
            <Typography variant="body2" color="inherit">
                © 2025 Municipalidad de Cholchol. Todos los derechos reservado.
            </Typography>
        </Box>
    );
}
export default Footer;