import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

// Estilos para el diseño
const styles = {
  coverContainer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: `url('/Images/c6.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
  },
  coverText: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
     backgroundColor: 'rgba(0, 0, 0, 0.5)',
     padding: '10px 20px',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '16px',
    textTransform: 'uppercase',
    color: '#c41230',
  },
  content: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#333',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  columnContent: {
    padding: '16px',
  },
};

function Vission() {
  return (
    <Box>
      {/* Imagen de portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>
          Our Vision
        </Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={styles.sectionTitle}>
        Inspiring the Future of Kitchens
        </Typography>
        <Typography variant="body1" gutterBottom>
        For over 30 years we have worked with a small number of luxury Kitchen Companies across Europe, we have used this experience to adapt and change to ensure we always exceed our partners expectations.
        <br />
        <br />
"Our vision remains to be the leading manufacturing partner to a select number of luxury kitchen companies, recognized for exceptional quality, reliable service, and competitive pricing that supports our partners' growth and success."
        </Typography>

      </Box>
      <Typography variant="h5" sx={{
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#c41230',
    textAlign: 'center',
}}>
    "Your Partner In Production”
        </Typography>
    </Box>
  );
}

export default Vission;
