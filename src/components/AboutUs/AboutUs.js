import React, { useState, useEffect } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, styled, Divider, Button, useMediaQuery } from '@mui/material';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import GroupIcon from '@mui/icons-material/Group';
import History from './Historty'; // Corrige los nombres de archivo si es necesario
import Vision from './Vission';
import Mission from './Mission';
import OurTeam from './OurTeam';

const drawerWidth = 240;

const SidebarContent = styled('div')({
  height: 'auto',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: '1.5rem',
  marginBottom: '8px 0',
  marginTop: '20px',
  color: '#666',
});

const CustomListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',  // Asegura que el ícono y el texto estén en la misma fila
  alignItems: 'center',  // Centra verticalmente el contenido en la lista
  padding: '12px 16px',  // Aumenta el padding para más espacio
  borderRadius: '8px',
  marginBottom: '12px',
  marginTop: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&.Mui-selected': {
    backgroundColor: '#E30613',
    '& svg': { // Asegura que este selector apunte correctamente al ícono
      color: '#fff',  // Cambia el color del ícono a blanco cuando está seleccionado
    },
    '& .MuiListItemText-primary': {
      fontWeight: 'bold',
      color: 'black',  // Asegura que el texto sea blanco cuando está seleccionado
    },
  },
  '&:hover': {
    backgroundColor: 'rgba(227, 6, 19, 0.1)',
    '& svg': {
      color: '#CC0511',  // Cambia el color del ícono al pasar el mouse
    },
  },
  '& .MuiListItemText-primary': {
    marginLeft: '10px',  // Ajusta según sea necesario para alinear el texto
    textAlign: 'left',  // Alinea el texto a la izquierda
    fontSize: '1rem',
    fontWeight: '500',
  },
  '& svg': { // Estiliza el ícono dentro de cada ListItem
    color: '#E30613',  // Color rojo para el ícono por defecto
    marginBottom: '4px',  // Espacio entre el ícono y el texto
    marginRight: '10px',
  },
}));

function AboutUs() {
  const [selectedSection, setSelectedSection] = useState('History');
  const isMobile = useMediaQuery('(max-width: 600px)'); // Detecta si la pantalla es móvil.

  const [isFixed, setIsFixed] = useState(true);

useEffect(() => {
  const checkScroll = () => {
    const footerHeight = 300; // Asumiendo que tu footer tiene una altura de 60px
    const reachedBottom = window.scrollY + window.innerHeight >= document.body.offsetHeight - footerHeight;
    setIsFixed(!reachedBottom);
  };

  window.addEventListener('scroll', checkScroll);
  return () => window.removeEventListener('scroll', checkScroll);
}, []);

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    color: '#333',
    borderRight: 'none',
    marginTop: '10%',
    position: isFixed ? 'fixed' : 'static',  // Controla la posición basada en el estado
    maxHeight: 'calc(100vh - 120px)', // Ajusta aquí para el alto del footer y la barra superior si la hay
    overflowY: 'auto', // Habilita el scroll interno si es necesario
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: theme.zIndex.drawer, // Asegúrate de que el Drawer tiene un zIndex apropiado
  },
}));
 
useEffect(() => {
  if (selectedSection !== null) {
    window.scrollTo(0, 0);
  }
}, [selectedSection]); // Dependencia: selectedSection

  // Mapeo de nombres a componentes
  const componentMap = {
    History: History,
    Vision: Vision,
    Mission: Mission,
    'Our Team': OurTeam,
  };

  const sections = ['History', 'Vision', 'Mission', 'Our Team'];

  const icons = {
    History: <HistoryEduIcon />,
    Vision: <VisibilityIcon />,
    Mission: <FlagIcon />,
    'Our Team': <GroupIcon />,
  };

  const ActiveComponent = componentMap[selectedSection];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row', // Ajusta dirección para móviles
        minHeight: '100vh', // Asegura que ocupe toda la pantalla
        backgroundColor: '#FFFFFF',
      }}
    >
      {isMobile ? (
  <Box sx={{ width: '100%', padding: '10px', flexGrow: 1 }}>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px',  // Agrega un margen para separar los botones del contenido que sigue.
      }}
    >
      {sections.map((text) => (
        <Button
          key={text}
          onClick={() => {
            setSelectedSection(text); // Actualiza la sección seleccionada
            window.scrollTo(0, 0); }}
          sx={{
            width: '45%', // Ajusta el ancho como prefieras para que se acomode bien en la pantalla
            backgroundColor: '#E30613',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textTransform: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#CC0511' },
          }}
        >
          {icons[text]}
          {text}
        </Button>
      ))}
    </Box>
    {ActiveComponent && <ActiveComponent />}
  </Box>
      ) : (
        <>
          <StyledDrawer variant="permanent" anchor="left">
            <SidebarContent>
              <Title>About Dller</Title>
              <Divider />
              <List>
                {sections.map((text) => (
                  <CustomListItem
                    button
                    key={text}
                    onClick={() => setSelectedSection(text)}
                    selected={selectedSection === text}
                  >
                    {icons[text]}
                    <ListItemText primary={text} />
                  </CustomListItem>
                ))}
              </List>
            </SidebarContent>
          </StyledDrawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              overflow: 'auto', // Manejo de contenido largo
              minHeight: 'calc(100vh - 60px)', // Ajuste para el contenido principal
            }}
          >
            {ActiveComponent ? (
              <ActiveComponent />
            ) : (
              <Typography>Selecciona una sección para mostrar su contenido.</Typography>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}

export default AboutUs;
