import React from 'react';
import { Box, Typography, Grid, Divider, Paper } from '@mui/material';

// Estilos para el diseño
const styles = {
  coverContainer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: `url('/Images/modern.png')`,
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
  content: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#333',
  },
  timelineBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '24px',
  },
  timelineYear: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#E30613',
    marginRight: '16px',
  },
  timelineContent: {
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginTop: '16px',
  },
};

function Historty() {
  return (
    <Box>
      {/* Imagen de portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>
          Our History
        </Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#E30613', fontWeight: 'bold', marginBottom: '16px' }}>
          A Legacy of Excellence
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center', marginBottom: '32px' }}>
          From humble beginnings to a leader in the kitchen industry, our journey is marked by innovation, passion, and commitment to quality. Here's a glimpse of our story.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Línea de tiempo */}
        <Box>
          {[
            { year: '1990', text: 'Founded with a vision to revolutionize kitchens with personalized designs.' },
            { year: '2000', text: 'Launched our first line of sustainable kitchen solutions.' },
            { year: '2010', text: 'Expanded globally, bringing our innovative designs to international markets.' },
            { year: '2020', text: 'Introduced smart kitchen technologies, enhancing daily living.' },
          ].map((entry, index) => (
            <Box sx={styles.timelineBox} key={index}>
              <Typography sx={styles.timelineYear}>{entry.year}</Typography>
              <Paper sx={styles.timelineContent}>
                <Typography variant="body1">{entry.text}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Sección de cierre */}
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#E30613', fontWeight: 'bold', marginBottom: '16px' }}>
          A Journey of Innovation and Trust
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '32px' }}>
          Our history is a testament to our dedication to creating spaces where memories are made. As we look to the future, we remain committed to crafting kitchens that inspire.
        </Typography>
        <Box 
          component="img" 
          src="/Images/modern.png" 
          alt="Journey of Innovation and Trust" 
          sx={styles.image} 
        />
      </Box>
    </Box>
  );
}

export default Historty;
