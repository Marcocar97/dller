import React from 'react';
import { Box, Typography, Grid, Divider, Paper } from '@mui/material';

// Estilos para el diseño
const styles = {
  coverContainer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: `url('/Images/historycover.png')`,
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
    color: '#c41230',
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
    height: '150px',
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
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#c41230', fontWeight: 'bold', marginBottom: '16px' }}>
        35 Years of Carpentry Excellence
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center', marginBottom: '32px' }}>
        For over three decades, Dller has been at the forefront of craftsmanship, delivering bespoke carpentry solutions that combine timeless artistry with cutting-edge innovation. Founded 35 years ago with a vision to create handcrafted masterpieces, we’ve built a reputation for quality, reliability, and collaboration. From our humble beginnings as a small workshop, we’ve grown into a thriving community of over 40 skilled artisans, known for turning our clients’ visions into realities.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Sección de cierre */}
        <Box sx={{textAlign: 'center', padding: '20px'} }> 
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#c41230', fontWeight: 'bold', marginBottom: '16px' }}>
        Where Tradition Meets Innovation
        </Typography>
       {/* Sección con tarjetas */}
       <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={styles.card}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fffff', padding:'10px' }}>
              Traditional Techniques
                            </Typography>
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
              Hand waxing, mortise-and-tenon joinery, and intricate hand-carving to preserve the authenticity and soul of the craft.
              <br />
              <br />
              </Typography>
              <Box 
                component="img" 
                src="/Images/at.jpg" 
                alt="Excellence in Design" 
                sx={styles.image} 
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={styles.card}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fffff', padding:'10px' }}>
              Modern Tools
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
              Precision cutting and 3D modelling, to ensure our designs are as efficient and durable as they are beautiful.
              <br />
              <br />
              </Typography>
              <Box 
                component="img" 
                src="/Images/modetool.png" 
                alt="Functionality First" 
                sx={styles.image} 
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={styles.card}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fffff', padding:'10px' }}>
              Environmental
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '8px' }}>
              We constantly look to improve our sustainability through responsible sourcing right through to a fully heated factory fuelled by our sawdust waste.
              <br />
              </Typography>
              <Box 
                component="img" 
                src="/Images/enviro.png" 
                alt="Sustainable Living" 
                sx={styles.image} 
              />
            </Paper>
          </Grid>
        </Grid>
        </Box>
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

export default Historty;
