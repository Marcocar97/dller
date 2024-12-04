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
};

function Services() {
  return (
    <Box>
      {/* Imagen de portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>Our Services</Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={styles.sectionTitle}>
          Tailored Solutions for Every Need
        </Typography>
        <Typography variant="body1" gutterBottom>
          At Dller, we provide a range of services designed to meet the diverse needs of our clients. From personalized kitchen designs to professional installations and after-sales support, we ensure every step of the process exceeds expectations.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Sección con columnas para servicios */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={styles.columnContent}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Custom Kitchen Design
              </Typography>
              <Typography variant="body1" gutterBottom>
                Work with our expert designers to create a kitchen that reflects your unique style and needs.
              </Typography>
              <Box 
                component="img" 
                src="/Images/modern.png" 
                alt="Custom Kitchen Design" 
                sx={styles.image} 
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={styles.columnContent}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Professional Installation
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our team ensures that every piece is installed with precision and care for a flawless finish.
              </Typography>
              <Box 
                component="img" 
                src="/Images/modern.png" 
                alt="Professional Installation" 
                sx={styles.image} 
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={styles.columnContent}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                After-Sales Support
              </Typography>
              <Typography variant="body1" gutterBottom>
                Enjoy peace of mind with our dedicated after-sales team, ready to assist with any needs.
              </Typography>
              <Box 
                component="img" 
                src="/Images/modern.png" 
                alt="After-Sales Support" 
                sx={styles.image} 
              />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Texto destacado final */}
        <Typography variant="h5" sx={styles.sectionTitle}>
          Excellence in Every Detail
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our commitment to quality and customer satisfaction sets us apart. Let us transform your kitchen into a space that inspires.
        </Typography>
      </Box>
    </Box>
  );
}

export default Services;
