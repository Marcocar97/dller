import React from 'react';
import { Box, Typography, Link, Grid, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import { styled} from '@mui/system';

// Estilos para el Footer
const styles = {
  footerContainer: {
    padding: '40px 20px',
    marginTop: '40px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  logoImage: {
    height: '60px',
    marginBottom: '0px',
  },
  description: {
    fontSize: '0.9rem',
    textAlign: 'center',
    color: '#666',
    maxWidth: '280px',
    margin: '0 auto',
    lineHeight: '1.5',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '20px',
  },
  columnTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    textTransform: 'uppercase',
  },
  link: {
    color: '#c41230',
    textDecoration: 'none',
    fontSize: '0.9rem',
    marginBottom: '5px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  copyright: {
    fontSize: '0.8rem',
    color: '#999',
    textAlign: 'center',
    marginTop: '20px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center', // Centra los íconos de las redes sociales horizontalmente
    marginTop: '10px', // Espacio entre la descripción y los enlaces
  },
  socialIcon: {
    marginLeft: '10px', // Espacio entre los íconos
    '&:first-child': {
      marginLeft: 0, // No hay espacio antes del primer ícono
    }
  }
};
const VideoContainer = styled('video')({
    width: '100%', // Asegura que el video no sea más ancho que el logo
    maxWidth: '300px', // Ajusta esto según el ancho deseado que debe ser proporcional al logo
  });

const Footer = () => {
  return (
    <Box sx={styles.footerContainer}>
      {/* Divisor superior */}
      <Divider sx={{ marginBottom: '20px' }} />

      <Grid container spacing={4}>
        {/* Columna 1: Logo e Introducción */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={styles.column}>
            <Box sx={styles.logoContainer}>
              <img src="/dllerlogo.png" alt="Dller Logo" style={styles.logoImage} />
            </Box>
            <VideoContainer
         autoPlay
         muted
         playsInline
         controls={false} // Opcional: oculta el video después de reproducirlo
      >
        <source src="logo.texto.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </VideoContainer>
             {/* Contenedor para enlaces de redes sociales */}
          <Box sx={styles.socialLinks}>
            <Link href="https://www.linkedin.com/company/dller/" target="_blank" rel="noopener noreferrer" sx={styles.socialIcon}>
              <LinkedInIcon fontSize="large" color="primary" />
            </Link>
            {/* Agrega más enlaces aquí si es necesario */}
          </Box>
          </Box>
        </Grid>

        {/* Columna 2: Información de contacto */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={styles.column}>
            <Typography sx={styles.columnTitle}>Contact Us</Typography>
            <Typography variant="body2" sx={{ marginBottom: '5px', color: '#666' }}>
            Dller, Whitchurch, Shropshire
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '5px', color: '#666' }}>
              Phone: +44 777 9621607 
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Email:{' '}
              <Link href="mailto:contact@dller.com" sx={styles.link}>
              Enquiry@dller.com
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Columna 3: Enlaces de cocinas */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={styles.column}>
            <Typography sx={styles.columnTitle}>Our Kitchens</Typography>
            <Link href="/kitchens/modern" sx={styles.link}>
              Modern Kitchens
            </Link>
            <Link href="/kitchens/classic" sx={styles.link}>
              Classic Kitchens
            </Link>
            <Link href="/kitchens/european" sx={styles.link}>
              European Kitchens
            </Link>
            <Link href="/kitchens/unique" sx={styles.link}>
              Unique Kitchens
            </Link>
          </Box>
        </Grid>

        {/* Columna 4: Enlaces legales */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={styles.column}>
            <Typography sx={styles.columnTitle}>Legal</Typography>
            <Link href="/cookies-policy" sx={styles.link}>
              Cookies Policy
            </Link>
            <Link href="/privacy-policy" sx={styles.link}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" sx={styles.link}>
              Terms of Service
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Divisor inferior */}
      <Divider sx={{ marginTop: '20px', marginBottom: '10px' }} />

      {/* Copyright */}
      <Typography sx={styles.copyright}>© 2024 Dller. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
