import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

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
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '16px',
    textTransform: 'uppercase',
    color: '#E30613',
  },
  content: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#333',
    textAlign: 'center',
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
  iconContainer: {
    fontSize: '50px',
    color: '#E30613',
    marginBottom: '10px',
  },
};

function WhyDller() {
  return (
    <Box>
      {/* Imagen de portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>Why Dller</Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={styles.sectionTitle}>
          The Dller Difference
        </Typography>
        <Typography variant="body1" gutterBottom>
          At Dller, we don't just design kitchens; we craft experiences. Here's why thousands of clients trust us to create their dream spaces.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Sección con columnas */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={styles.columnContent}>
              <Box sx={styles.iconContainer}>✨</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Unmatched Quality
              </Typography>
              <Typography variant="body1" gutterBottom>
                Every kitchen we design is built with the highest quality materials, ensuring longevity and elegance.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={styles.columnContent}>
              <Box sx={styles.iconContainer}>🌱</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Sustainability
              </Typography>
              <Typography variant="body1" gutterBottom>
                We prioritize eco-friendly materials and practices to reduce our environmental impact.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={styles.columnContent}>
              <Box sx={styles.iconContainer}>💡</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Innovative Design
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our team of experts constantly pushes boundaries to deliver modern, cutting-edge kitchen designs.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Texto destacado final */}
        <Typography variant="h5" sx={styles.sectionTitle}>
          Transform Your Space Today
        </Typography>
        <Typography variant="body1" gutterBottom>
          Experience the Dller difference and elevate your kitchen to the next level. Let us turn your vision into reality.
        </Typography>
        <Box
          component="img"
          src="/Images/modern.png"
          alt="Transform Your Space"
          sx={styles.image}
        />
      </Box>
    </Box>
  );
}

export default WhyDller;
