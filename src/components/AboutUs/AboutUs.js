import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Typography, styled, Divider } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import History from './Historty';  // Corrige los nombres de archivo si es necesario
import Vision from './Vission';
import Mission from './Mission';
import OurTeam from './OurTeam';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#FFFFFF', // Color de fondo blanco
    color: '#333',
    marginTop: '10%',
    height: `calc(100% - 1%)`
  },
});

const SidebarContent = styled('div')({
  height: '100%',
  backgroundColor: '#FFFFFF',
  padding: '20px',
});

const CustomListItem = styled(ListItem)({
  '&.Mui-selected': {
    backgroundColor: "transparent",
    '& .MuiListItemText-primary': {
      fontWeight: 'bold',
    }
  },
  '&:hover': {
    backgroundColor: "#CC0511",
    color: "white"
  }
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
          <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', textAlign: 'center' }}>
            About Dller
          </Typography>
          <Divider />
          <List>
            {sections.map((text) => (
              <CustomListItem button key={text} onClick={() => setSelectedSection(text)} selected={selectedSection === text}>
                <ListItemText primary={text} />
              </CustomListItem>
            ))}
          </List>
          <Divider sx={{ my: 1 }} />
          <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}>Contact Us</Typography>
          <List>
            <ListItem>
              <MailOutlineIcon sx={{ mr: 1 }} />
              <ListItemText primary="sales@dller.com" />
            </ListItem>
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
