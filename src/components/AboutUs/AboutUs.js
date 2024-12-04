import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, styled, Divider } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import History from './Historty';  // Corrige los nombres de archivo si es necesario
import Vision from './Vission';
import Mission from './Mission';
import OurTeam from './OurTeam';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FlagIcon from '@mui/icons-material/Flag';
import GroupIcon from '@mui/icons-material/Group';


const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    color: '#333',
    borderRight: 'none',
    marginTop: '10%',
    height: 'calc(100% - 1%)',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
});


const SidebarContent = styled('div')({
  height: '60%',
  backgroundColor: '#FFFFFF',
  padding: '1px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Ajusta para dejar espacio inferior
});

const Title = styled(Typography)({
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontSize: '1.5rem',
  marginBottom: '8px 0',
  marginTop: '20px',
  color: '#666', // Color distintivo para el título
});


const CustomListItem = styled(ListItem)({
  display: 'flex',
  alignItems: 'center', // Centra los iconos y texto
  padding: '10px 16px',
  borderRadius: '8px', // Bordes redondeados
  marginBottom: '12px',
  marginTop: '20px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&.Mui-selected': {
    backgroundColor: '#E30613',
    color: '#fff',
    '& .MuiListItemText-primary': {
      fontWeight: 'bold',
      color: '#fff',
    },
  },
  '&:hover': {
    backgroundColor: 'rgba(227, 6, 19, 0.1)', // Fondo rojo claro al pasar el ratón
    color: '#E30613',
  },
  '& .MuiListItemText-primary': {
    marginLeft: '10px', // Espaciado entre icono y texto
    fontSize: '1rem',
    fontWeight: '500',
  },
});

function AboutUs() {
  const [selectedSection, setSelectedSection] = useState('History');

  // Mapeo de nombres a componentes
  const componentMap = {
    'History': History,
    'Vision': Vision,
    'Mission': Mission,
    'Our Team': OurTeam,
  };

  const sections = ['History', 'Vision', 'Mission', 'Our Team'];  // Nombres amigables para mostrar en la UI

  const ActiveComponent = componentMap[selectedSection];

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#FFFFFF' }}>
      <StyledDrawer variant="permanent" anchor="left">
        <SidebarContent>
        <Title>About Dller</Title>
        <Divider />
          <List>
  {sections.map((text, index) => (
    <CustomListItem
      button
      key={text}
      onClick={() => {
        setSelectedSection(text); // Actualiza la sección seleccionada
        window.scrollTo(0, 0); // Lleva la página al inicio
      }}
      selected={selectedSection === text}
    >
      {index === 0 && <HistoryEduIcon sx={{ color: selectedSection === text ? '#fffff' : '#E30613' }} />}
      {index === 1 && <VisibilityIcon sx={{ color: selectedSection === text ? '#fffff' : '#E30613' }} />}
      {index === 2 && <FlagIcon sx={{ color: selectedSection === text ? '#fffff' : '#E30613' }} />}
      {index === 3 && <GroupIcon sx={{ color: selectedSection === text ? '#fffff' : '#E30613' }} />}
      <ListItemText primary={text} />
    </CustomListItem>
  ))}
</List>

        </SidebarContent>
      </StyledDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {ActiveComponent ? <ActiveComponent /> : <Typography>Selecciona una sección para mostrar su contenido.</Typography>}
      </Box>
    </Box>
  );
}

export default AboutUs; 