import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Link } from '@mui/material';
import logo from '/src/assets/channels4_profile.jpg';


/**
 * Componente Header: Representa el encabezado de la aplicación
 */
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  /**
   * Función para alternar el estado del Drawer
   * @param {boolean} open - Estado del Drawer
   */
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            {/* Logo de la aplicación */}
            <Avatar
              alt="Logo"
              src={logo} 
              sx={{ marginRight: 5 }}
            />
            {/* Título del encabezado */}
            <Typography variant="h6">
              Municipalidad de Cholchol 
            </Typography>
            
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {/* Enlaces de navegación */}
            <br />
            <Link href="#servicios" color="inherit" underline="none" sx={{ marginRight: 2 }}>
              Servicios
            </Link>
            <Link href="#contacto" color="inherit" underline="none" sx={{ marginRight: 2 }}>
              Contacto
            </Link>
            <Link href="#opcion3" color="inherit" underline="none">
              Opción 3
            </Link>
          </Box>
          {/* Botón para abrir el menú en dispositivos pequeños */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Drawer para navegación en dispositivos pequeños */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component="a" href="#servicios">
            <ListItemText primary="Servicios" />
          </ListItem>
          <ListItem button component="a" href="#contacto">
            <ListItemText primary="Contacto" />
          </ListItem>
          <ListItem button component="a" href="#opcion3">
            <ListItemText primary="Opción 3" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header; // Exporta el componente Header