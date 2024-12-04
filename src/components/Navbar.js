import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { styled, useTheme } from '@mui/system';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material'; 

// Estilización personalizada
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: 'none',
  position: 'fixed',  // Cambio de 'static' a 'fixed'
  width: '100%',  // Asegúrate de que se extiende a lo largo de toda la ventana
  zIndex: 1300, 
});
// MOVIL





//


const TopBar = styled(Toolbar)({
  justifyContent: 'center',
  minHeight: '70px', // Altura de la línea superior
  borderBottom: '1px solid #E0E0E0', // Separador entre las dos líneas
});

const BottomBar = styled(Toolbar) (({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80px',
    padding: '0', // Eliminar el padding extra
    gap: '45px', 
    [theme.breakpoints.down('sm')]: {
        display: 'none', // Ocultar en pantallas pequeñas
      },
}));

const Logo = styled('img')({
  height: '50px',
});

const KitchensButton = styled(Button)({
  backgroundColor: '#E30613',
  color: '#FFFFFF',
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '10px 20px',
  textTransform: 'none',
  borderRadius: '4px',
  '&:hover': {
    backgroundColor: '#CC0511',
  },
});

const NavButton = styled(Button)({
  color: '#000',
  fontSize: '18px',
  fontWeight: 'bold',
  fontFamily: 'Lato, sans-serif',
  margin: '0 10px',
  padding: '8px 12px',
  textTransform: 'none',
  '&:hover': {
    color: '#E30613',
    textDecoration: 'underline',
  },
});

const SubmenuContainer = styled(Box)({
  position: 'relative',
});

const Submenu = styled(Box)(({ theme }) => ({
    display: 'none',
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    zIndex: 1301,
    padding: '10px 0',
    width: '200px', // Ancho consistente del menú
    '&.active': {
      display: 'block', // Aquí se hace visible
    },
    '& > div': {
      padding: '10px 20px',
      fontSize: '14px',
      color: '#000',
      textDecoration: 'none', // Sin subrayado
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#F5F5F5', // Fondo claro en hover
        color: '#E30613', // Texto rojo en hover
        transform: 'translateX(5px)', // Movimiento sutil hacia la derecha
        transition: 'all 0.3s ease',
      },
    },
  }));
  

function Navbar() {
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const [aboutUsSubmenuVisible, setAboutUsSubmenuVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev); // Alternar el menú móvil

  const handleSubmenuEnter = () => {
    setSubmenuVisible(true); // Mostrar el submenú al entrar
  };

  const handleSubmenuLeave = () => {
    setSubmenuVisible(false); // Ocultar el submenú al salir
  };

  const handleAboutUsSubmenuEnter = () => {
    setAboutUsSubmenuVisible(true);
  };

  const handleAboutUsSubmenuLeave = () => {
    setAboutUsSubmenuVisible(false);
  };

  return (
    <StyledAppBar position="static">
      {/* Línea superior para el logo */}
      <TopBar>
        <Link to="/">
        <Logo src=".././dllerlogo.png" alt="dller logo" />
        </Link>

        <IconButton
  sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', right: '20px' }}
  onClick={toggleMobileMenu}
>
  <MenuIcon />
</IconButton>


      </TopBar>

      {/* Línea inferior para los enlaces y Kitchens */}
      <BottomBar>
        {/* Submenú Our Kitchens */}
        <SubmenuContainer
          onMouseEnter={handleSubmenuEnter}
          onMouseLeave={handleSubmenuLeave}
        >
          <KitchensButton
            startIcon={<MenuIcon />}
            endIcon={<ExpandMoreIcon />}
          >
            Our Kitchens
          </KitchensButton>
          <Submenu className={submenuVisible ? 'active' : ''}>
          <Box
      component={Link}
      to="/kitchens/modern"
      sx={{ 
        textDecoration: 'none', // Eliminar subrayado
        color: '#000', // Mantener el color heredado
        padding: '10px 20px', 
        fontSize: '14px',
        display: 'block', // Asegura que ocupe todo el ancho
        '&:hover': {
          backgroundColor: '#F5F5F5', // Fondo claro en hover
          color: '#E30613', // Texto rojo en hover
          transform: 'translateX(5px)', // Movimiento hacia la derecha
          transition: 'all 0.3s ease',
        },
      }}
    >
      Modern
    </Box>
    <Box
      component={Link}
      to="/kitchens/classic"
      sx={{ 
        textDecoration: 'none', // Eliminar subrayado
        color: '#000', // Mantener el color heredado
        padding: '10px 20px', 
        fontSize: '14px',
        display: 'block', // Asegura que ocupe todo el ancho
        '&:hover': {
          backgroundColor: '#F5F5F5', // Fondo claro en hover
          color: '#E30613', // Texto rojo en hover
          transform: 'translateX(5px)', // Movimiento hacia la derecha
          transition: 'all 0.3s ease',
        },
      }}
    >
      Classic
    </Box>
    <Box
      component={Link}
      to="/kitchens/european"
      sx={{ 
        textDecoration: 'none', // Eliminar subrayado
        color: '#000', // Mantener el color heredado
        padding: '10px 20px', 
        fontSize: '14px',
        display: 'block', // Asegura que ocupe todo el ancho
        '&:hover': {
          backgroundColor: '#F5F5F5', // Fondo claro en hover
          color: '#E30613', // Texto rojo en hover
          transform: 'translateX(5px)', // Movimiento hacia la derecha
          transition: 'all 0.3s ease',
        },
      }}
    >
      European
    </Box>
    <Box
      component={Link}
      to="/kitchens/unique"
      sx={{ 
        textDecoration: 'none', // Eliminar subrayado
        color: '#000', // Mantener el color heredado
        padding: '10px 20px', 
        fontSize: '14px',
        display: 'block', // Asegura que ocupe todo el ancho
        '&:hover': {
          backgroundColor: '#F5F5F5', // Fondo claro en hover
          color: '#E30613', // Texto rojo en hover
          transform: 'translateX(5px)', // Movimiento hacia la derecha
          transition: 'all 0.3s ease',
        },
      }}
    >
      Unique
    </Box>
          </Submenu>
        </SubmenuContainer>

        {/* Otros botones */}
        <NavButton component={Link} to="/about">About Us</NavButton>
        <NavButton component={Link} to="/services">Services</NavButton>
        <NavButton component={Link} to="/why-dller">Why Dller</NavButton>
        <NavButton component={Link} to="/contac">Contact Us</NavButton>


        <Drawer
  anchor="left"
  open={mobileMenuOpen}
  onClose={toggleMobileMenu}
  sx={{ display: { xs: 'block', md: 'none' } }}
>
  <Box
    sx={{
      width: 300,
      padding: '20px',
      backgroundColor: '#FFFFFF', // Fondo blanco
      height: '100%',
    }}
  >
    {/* Botón de cierre */}
    <IconButton onClick={toggleMobileMenu} sx={{ marginBottom: '20px', color: '#E30613' }}>
      <CloseIcon />
    </IconButton>

    {/* Sección Our Kitchens */}
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: '#E30613',
        marginBottom: '10px',
      }}
    >
      Our Kitchens
    </Typography>
    <List>
      <ListItem
        button
        component={Link}
        to="/kitchens/modern"
        onClick={toggleMobileMenu}
        sx={{
          padding: '10px 20px',
          color: '#333',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: '#E30613',
          },
        }}
      >
        <ListItemText primary="Modern Kitchens" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/kitchens/classic"
        onClick={toggleMobileMenu}
        sx={{
          padding: '10px 20px',
          color: '#333',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: '#E30613',
          },
        }}
      >
        <ListItemText primary="Classic Kitchens" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/kitchens/european"
        onClick={toggleMobileMenu}
        sx={{
          padding: '10px 20px',
          color: '#333',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: '#E30613',
          },
        }}
      >
        <ListItemText primary="European Kitchens" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/kitchens/unique"
        onClick={toggleMobileMenu}
        sx={{
          padding: '10px 20px',
          color: '#333',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: '#E30613',
          },
        }}
      >
        <ListItemText primary="Unique Kitchens" />
      </ListItem>
    </List>

    {/* Separador */}
    <Box
      sx={{
        height: '1px',
        backgroundColor: '#E0E0E0',
        margin: '20px 0',
      }}
    />

    {/* Otras secciones */}
    <Typography
      variant="h6"
      sx={{
        fontWeight: 'bold',
        fontSize: '1.2rem',
        color: '#E30613',
        marginBottom: '10px',
      }}
    >
      More
    </Typography>
    <List>
      <ListItem
        button
        component={Link}
        to="/about"
        onClick={toggleMobileMenu}
        sx={{
          padding: '10px 20px',
          color: '#333',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: '#E30613',
          },
        }}
      >
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/services"
        onClick={toggleMobileMenu}
        sx={{
          padding: '10px 20px',
          color: '#333',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: '#E30613',
          },
        }}
      >
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/why-dller"
        onClick={toggleMobileMenu}
        sx={{
          padding: '10px 20px',
          color: '#333',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: '#E30613',
          },
        }}
      >
        <ListItemText primary="Why Dller" />
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/contac"
        onClick={toggleMobileMenu}
        sx={{
          padding: '10px 20px',
          color: '#333',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#F5F5F5',
            color: '#E30613',
          },
        }}
      >
        <ListItemText primary="Contact Us" />
      </ListItem>
    </List>
  </Box>
</Drawer>


      </BottomBar>
    </StyledAppBar>
  );
}

export default Navbar;
