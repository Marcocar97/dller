import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

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
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '16px',
    textTransform: 'uppercase',
    color: '#E30613',
    textAlign: 'center',
  },
  card: {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  cardMedia: {
    height: '200px',
    backgroundSize: 'cover',
    borderRadius: '8px 8px 0 0',
  },
};

function OurTeam() {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      bio: 'John has over 20 years of experience in the kitchen design industry, leading the company to global success.',
      image: '/Images/modern.png',
    },
    {
      name: 'Jane Smith',
      position: 'Head of Design',
      bio: 'Jane specializes in creating innovative and personalized kitchen designs that reflect client individuality.',
      image: '/Images/modern.png',
    },
    {
      name: 'Emily Johnson',
      position: 'Sustainability Manager',
      bio: 'Emily ensures all our processes and materials align with our commitment to the environment.',
      image: '/Images/modern.png',
    },
    {
      name: 'Michael Brown',
      position: 'Tech Lead',
      bio: 'Michael is passionate about integrating smart technologies into our kitchen solutions.',
      image: '/Images/modern.png',
    },
  ];

  return (
    <Box>
      {/* Imagen de portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>
          Our Team
        </Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={styles.sectionTitle}>
          Meet Our Team
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', marginBottom: '32px' }}>
          Our talented team brings expertise, creativity, and passion to every project. Meet the people behind our success.
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={styles.card}>
                <CardMedia
                  component="img"
                  sx={styles.cardMedia}
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#E30613', marginBottom: '8px' }}>
                    {member.position}
                  </Typography>
                  <Typography variant="body2">{member.bio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default OurTeam;
