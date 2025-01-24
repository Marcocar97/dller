import React, { useRef } from 'react';
import { Box, Typography, TextField, Button, Grid, Divider } from '@mui/material';
import emailjs from '@emailjs/browser';

// Estilos para el diseño
const styles = {
  coverContainer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: `url('/Images/ct.jpg')`,
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
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8qd27im', // ID del servicio
        'template_luu9gag', // ID de la plantilla
        formRef.current,
        'q8SYdWtSShPPbGI8c' // Clave pública
      )
      .then(
        () => {
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error:', error);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

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
        At Dller, we understand the importance of discretion in every collaboration. Whether you're looking for manufacturing support or simply exploring your options, we're here to help—no strings attached.
        <br />
        <br />
<strong> Complete Confidentiality:</strong> For over 30 years we have built our business on trust. We ensure absolute discretion and respect for your intellectual property.
<br />
<br />
<strong>No Obligation:</strong> Reaching out doesn’t commit you to anything. We're here to guide, answer questions, and help you explore the possibilities whether that’s over the phone or face to face. 
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
              <form ref={formRef} onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="user_name"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="user_email"
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  margin="normal"
                  required
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#c41230',
                    color: '#fff',
                    marginTop: '10px',
                    '&:hover': {
                      backgroundColor: '#CC0511',
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>

          {/* Información de Contacto */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Contact Information
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: <a href="mailto:contact@dller.com">Enquiry@dller.com</a>
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: +44 7779621607
              </Typography>
              <Typography variant="body1" gutterBottom>
                Address: Dller Spinningfields Manchester, M3 3AJ
              </Typography>
              {/* Mapa de Ubicación */}
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37989.24414639973!2d-2.3290645!3d53.4804733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1dc5639fb79%3A0x327fd04edc446cca!2sLeft%20Bank%2C%20Manchester%20M3%203AJ%2C%20UK!5e0!3m2!1sen!2ses!4v1733682306429!5m2!1sen!2ses"
                sx={styles.map}
                title="Map Location"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h5" sx={{
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#c41230',
    textAlign: 'center',
}}>
        <br />
        <br />
    "Your Partner In Production”
        </Typography>
    </Box>
  );
}

export default ContactUs;
