import React from 'react';
import { Box, Typography, TextField, Button, Grid, Divider } from '@mui/material';

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
  formContainer: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  map: {
    width: '100%',
    height: '300px',
    borderRadius: '8px',
    marginTop: '20px',
  },
};

function ContactUs() {
  return (
    <Box>
      {/* Imagen de portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>Contact Us</Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={styles.sectionTitle}>
          Get in Touch
        </Typography>
        <Typography variant="body1" gutterBottom>
          We'd love to hear from you! Reach out using the form below or contact us through our email, phone, or visit us at our location.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Sección con Formulario y Contacto */}
        <Grid container spacing={4}>
          {/* Formulario de Contacto */}
          <Grid item xs={12} md={6}>
            <Box sx={styles.formContainer}>
              <Typography variant="h6" gutterBottom>
                Contact Form
              </Typography>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#E30613',
                  color: '#fff',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#CC0511',
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>

          {/* Información de Contacto */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Contact Information
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: <a href="mailto:contact@dller.com">contact@dller.com</a>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: +1 (123) 456-7890
              </Typography>
              <Typography variant="body1" gutterBottom>
                Address: 123 Main Street, City, Country
              </Typography>
              {/* Mapa de Ubicación */}
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.836981206287!2d-122.42100568468106!3d37.77928097975732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7d2c3d03%3A0x38a6f674d657679!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1633535432928!5m2!1sen!2sin"
                sx={styles.map}
                title="Map Location"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ContactUs;
