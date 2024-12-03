import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';

// Estilos personalizados
const styles = {
    paperContainer: {
      padding: '20px',
      margin: '20px 0',
      backgroundColor: '#fff'  // Ajusta al tema de tu página
    },
    header: {
      position: 'absolute', // Posicionamiento absoluto para sobreponer sobre la imagen
      bottom: '50%', // Ajuste desde la parte inferior de la imagen
      left: '50%',
      transform: 'translateX(-50%)', // Centrado horizontal
      color: '#FFFFFF', // Texto blanco para contraste
      textShadow: '1px 1px 2px rgba(0,0,0,0.7)', // Sombra para mejorar la legibilidad
      width: '100%', // Asegura que el texto se ajuste al ancho de la imagen
      textAlign: 'center', // Centra el texto horizontalmente
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    coverImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover'  // Asegura que la imagen cubra completamente el área asignada sin perder proporciones
    },
    coverBox: {
      position: 'relative', // Posición relativa para contener el texto absoluto
      height: '300px', // Altura fija de la imagen de portada
      marginBottom: '20px', // Espacio después de la imagen
    }
  };

function Historty() {
  return (
    <Box sx={{ width: '100%', maxWidth: '99%', mx: 'auto' }}>
        {/* Imagen de portada con texto */}
      <Box sx={styles.coverBox}>
        <img
          style={styles.coverImage}
          src="images/modern.png"
          alt="Portada de Nuestra Historia"
        />
        <Typography variant="h3" sx={styles.header}>
          Our History
        </Typography>
      </Box>
      <Paper elevation={2} sx={styles.paperContainer}>
        <List>
          <ListItem sx={styles.timelineItem}>
            <ListItemAvatar>
              <Avatar>
                <TimelineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Fundación" secondary="1990 - La compañía fue fundada en X lugar, comenzando como una pequeña startup." />
          </ListItem>
          <ListItem sx={styles.timelineItem}>
            <ListItemAvatar>
              <Avatar>
                <TimelineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Expansión" secondary="2005 - Expansión a nuevos mercados internacionales." />
          </ListItem>
          <ListItem sx={styles.timelineItem}>
            <ListItemAvatar>
              <Avatar>
                <TimelineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Innovación" secondary="2015 - Lanzamiento de un nuevo producto revolucionario que cambió la industria." />
          </ListItem>
          <ListItem sx={styles.timelineItem}>
            <ListItemAvatar>
              <Avatar>
                <TimelineIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Hoy" secondary="2023 - Dller es reconocido como líder en su campo con más de 10,000 empleados globalmente." />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
}

export default Historty;
