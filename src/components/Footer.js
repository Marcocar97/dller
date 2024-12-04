import React from 'react';
import { Box, Typography, Link, Grid, Divider } from '@mui/material';

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
    marginBottom: '10px',
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
    color: '#E30613',
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
};

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
            <Typography sx={styles.description}>
              Transforming kitchen design with innovation, sustainability, and tailored solutions. Let’s create your dream kitchen together!
            </Typography>
          </Box>
        </Grid>

        {/* Columna 2: Información de contacto */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={styles.column}>
            <Typography sx={styles.columnTitle}>Contact Us</Typography>
            <Typography variant="body2" sx={{ marginBottom: '5px', color: '#666' }}>
              123 Main Street, City, Country
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '5px', color: '#666' }}>
              Phone: +1 (123) 456-7890
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Email:{' '}
              <Link href="mailto:contact@dller.com" sx={styles.link}>
                contact@dller.com
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
            <Link href="/kitchens/unique" sx={styles.link}>
              Unique Kitchens
            </Link>
            <Link href="/kitchens/classic" sx={styles.link}>
              Classic Kitchens
            </Link>
            <Link href="/kitchens/rustic" sx={styles.link}>
              Rustic Kitchens
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
