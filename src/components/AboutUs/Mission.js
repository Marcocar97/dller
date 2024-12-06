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
  card: {
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginTop: '16px',
  },
};

function Mission() {
  return (
    <Box>
      {/* Imagen de portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>
          Our Mission
        </Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#c41230', fontWeight: 'bold', marginBottom: '16px' }}>
          Exceptional manufacturing solutions
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center', marginBottom: '32px' }}>
        "Our mission is to deliver exceptional manufacturing solutions to luxury kitchen companies by combining superior craftsmanship, efficient service, and cost-effective pricing. We are committed to building strong partnerships through consistent quality, reliability, and responsiveness, enabling our clients to thrive in a competitive market."
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Sección con tarjetas */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={styles.card}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c41230' }}>
                Excellence in Design
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
                We strive for design excellence in every kitchen, ensuring every detail enhances the living experience.
              </Typography>
              <Box 
                component="img" 
                src="/Images/modern.png" 
                alt="Excellence in Design" 
                sx={styles.image} 
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={styles.card}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c41230' }}>
                Functionality First
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
                Our kitchens are designed with functionality at their core, creating spaces that make daily life easier.
              </Typography>
              <Box 
                component="img" 
                src="/Images/modern.png" 
                alt="Functionality First" 
                sx={styles.image} 
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={styles.card}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c41230' }}>
                Sustainable Living
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
                We commit to sustainability, using eco-friendly materials to create kitchens that are kind to the planet.
              </Typography>
              <Box 
                component="img" 
                src="/Images/modern.png" 
                alt="Sustainable Living" 
                sx={styles.image} 
              />
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Sección final con énfasis */}
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#c41230', fontWeight: 'bold', marginBottom: '16px' }}>
          Building Memories in Every Kitchen
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          At the heart of every kitchen we design is a commitment to building spaces where memories are made. From morning coffees to family dinners, we create the perfect backdrop for life's special moments.
        </Typography>
        <Box 
          component="img" 
          src="/Images/modern.png" 
          alt="Building Memories" 
          sx={{ ...styles.image, marginTop: '24px' }} 
        />
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

export default Mission;
