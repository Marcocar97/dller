import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

// Estilización personalizada
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#FFFFFF',
  boxShadow: 'none',
  position: 'fixed',  // Cambio de 'static' a 'fixed'
  width: '100%',  // Asegúrate de que se extiende a lo largo de toda la ventana
  zIndex: 1300, 
});

const TopBar = styled(Toolbar)({
  justifyContent: 'center',
  minHeight: '70px', // Altura de la línea superior
  borderBottom: '1px solid #E0E0E0', // Separador entre las dos líneas
});

const BottomBar = styled(Toolbar)({
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80px',
    padding: '0', // Eliminar el padding extra
    gap: '45px', 
});

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
            <Box>Classic</Box>
            <Box>Rustic</Box>
          </Submenu>
        </SubmenuContainer>

        {/* Otros botones */}
        <NavButton component={Link} to="/about">About Us</NavButton>
        <NavButton component={Link} to="/kuchnie">Services</NavButton>
        <NavButton component={Link} to="/contact">Why Dller</NavButton>
        <NavButton component={Link} to="/contact">Contact Us</NavButton>
      </BottomBar>
    </StyledAppBar>
  );
}

export default Navbar;
