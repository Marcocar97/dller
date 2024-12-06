import React  from 'react';
import { Box, Typography, Grid, Divider, Card, CardContent, CardMedia, Link } from '@mui/material';

// Estilos para el diseño
const styles = {
  coverContainer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: 'url("/Images/modern.png")',
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
    textAlign: 'center',
  },
  content: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    color: '#333',
    textAlign: 'center',
  },
  card: {
    marginBottom: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '16px',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '300px', // Altura máxima para las imágenes
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  cardContent: {
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
        <Typography variant="h5" sx={styles.sectionTitle}>How We Can Help</Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                height="140"
                image="/Images/modern.png"
                alt="Manufacturing Only"
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h6" component="div">
                  Manufacturing Only
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Provide us with your kitchen design, and we’ll craft it to perfection.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                height="140"
                image="/Images/modern.png"
                alt="Collaborative Design"
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h6" component="div">
                  Collaborative Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Let’s work together to design kitchens that reflect your customer needs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />
        
        {/* Dller Services Section */}
        <Typography variant="h5" sx={styles.sectionTitle}>Dller Services</Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Cada servicio en su propia línea */}
          <Grid item xs={12}>
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                sx={styles.image}
                image="/Images/modern.png"
                alt="Kitchens Tailored to Your Vision"
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h6" component="div">
                  Kitchens Tailored to Your Vision
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If you already have your own designs, our team can produce them with precision and care. We use traditional techniques and modern technology to create kitchens that are durable, functional, and beautifully finished.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                sx={styles.image}
                image="/Images/modern.png"
                alt="Manufacturing Excellence"
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h6" component="div">
                  Manufacturing Excellence
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  If you already have your own designs, our team can produce them with precision and care. We use traditional techniques and modern technology to create kitchens that are durable, functional, and beautifully finished.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Collaborative Design and Customization */}
          <Grid item xs={12}>
            <Card sx={styles.card}>
            <CardMedia
                component="img"
                sx={styles.image}
                image="/Images/modern.png"
                alt="Manufacturing Excellence"
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h6" component="div">
                  Collaborative Design and Customization
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  For clients seeking more than manufacturing, we offer a collaborative kitchen design service. Whether you have a general idea or need guidance, our team works closely with you to develop kitchens that suit your clients.
                </Typography>
                {/* Sub-cards for the "Collaborative Design and Customization" service */}
                <Grid container spacing={2}>
  <Grid item xs={12} sm={4}>
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Typography gutterBottom variant="h6" component="div">
          Consultation
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We start by understanding your needs and style.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} sm={4}>
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Typography gutterBottom variant="h6" component="div">
          Concept Development
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Working with our kitchen architects and designers, we turn your vision into detailed plans using sketches and CAD modelling.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} sm={4}>
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Typography gutterBottom variant="h6" component="div">
          Material Selection
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Together, we choose materials that fit the design & budget, ensuring durability, practicality, and style.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />

<Typography variant="h5" sx={styles.sectionTitle}>Let’s start with a No-Obligation Confidential Consultation</Typography>
<Typography variant="body1" gutterBottom>
  At Dller, we believe that every successful project begins with understanding your companies unique needs and vision. That’s why we start with an initial <strong> no-obligation, confidential face-to-face consultation.</strong> This meeting is an opportunity for us to get to know your requirements, explore your ideas, and discuss how we might be able to help.
  <br />
  <br />
  Our goal is to provide you with clarity and insight while determining if there’s a good fit for us to work together. Whether you choose to proceed or not, this consultation is entirely commitment-free, ensuring you have the freedom to explore your options without any pressure.
  <br />
  <br />
  Simply contact  <Link href="mailto:contact@dller.com" sx={styles.link}>
                chiles@dller.com
              </Link>
</Typography>
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

export default Services;
