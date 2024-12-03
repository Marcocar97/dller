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
        Our vision is to redefine the experience of kitchen design and manufacturing, merging innovation, sustainability, and functionality. We aim to be recognized as leaders in personalized kitchen solutions, where every design reflects the individuality of our clients.
        </Typography>

        <Divider sx={{ my: 4 }} />
        
        {/* Sección con columnas */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={styles.columnContent}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Innovation and Technology
              </Typography>
              <Typography variant="body1" gutterBottom>
              We implement the latest technologies to create functional and aesthetic designs. Each kitchen is a testament to how technology can improve daily life.
              </Typography>
              <Box 
                component="img" 
                src="/Images/modern.png" 
                alt="Innovación y Tecnología" 
                sx={styles.image} 
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={styles.columnContent}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Sustainability
              </Typography>
              <Typography variant="body1" gutterBottom>
              We are committed to the environment by using sustainable materials and processes that minimize our ecological impact.
                              </Typography>
              <Box 
                component="img" 
                src="/Images/modern.png" 
                alt="Sostenibilidad" 
                sx={styles.image} 
              />
            </Box>
          </Grid>
        </Grid>

        {/* Divider para separar secciones */}
        <Divider sx={{ my: 4 }} />

        {/* Texto destacado final */}
        <Typography variant="h5" sx={styles.sectionTitle}>
        Transforming Spaces into Homes
        </Typography>
        <Typography variant="body1" gutterBottom>
        Our goal is not just to create kitchens but to transform spaces into welcoming homes where families can make memories. We design with our clients' aesthetics, functionality, and emotions in mind.
        </Typography>
        <Box 
          component="img" 
          src="/Images/modern.png" 
          alt="Transformando Espacios" 
          sx={styles.image} 
        />
      </Box>
    </Box>
  );
}

export default Vission;
