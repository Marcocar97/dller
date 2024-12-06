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
    color: '#c41230',
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
      name: 'Tomasz',
      position: 'Founder and Master Craftsman',
      bio: 'Tomas started Dller over 35 years ago with a focus on quality woodworking and traditional techniques. As the founder, he continues to work hands-on in the workshop, ensuring every piece meets the standards that built the company’s reputation.',
      image: '/Images/modern.png',
    },
    {
      name: 'Chiles',
      position: 'Client Director',
      bio: 'Working face to face with our clients to understand their needs and create a bespoke package of support, offering as much or as little collaboration as required, from full process solutions to simple toll manufacturing, Chiles works to understand your needs and ensure Dller exceeds them.',
      image: '/Images/modern.png',
    },
    {
      name: 'Sebastian',
      position: 'Co-Founder and Furniture Architect',
      bio: 'Sebastian works directly with each of our clients to meet their needs. As co-founder, he works closely with clients to understand their vision, ensuring designs are both practical and aligned with their preferences. His role bridges creative concepts with execution, making sure the results are both beautiful and usable.',
      image: '/Images/modern.png',
    },
    {
      name: 'Mateusz',
      position: 'Furniture Designer and CAD Specialist',
      bio: 'Mataus combines creative design with technical expertise, using CAD software to ensure every project is detailed and precise. His work helps streamline the process from concept to construction, keeping client expectations aligned with final outcomes.',
      image: '/Images/modern.png',
    },
    {
      name: 'Kamil',
      position: 'Chief Carpenter',
      bio: 'Kamil leads the carpentry team, overseeing production and ensuring high standards are met at every stage of the build. With years of experience in both traditional and modern methods, he ensures every project is completed efficiently and to specification.',
      image: '/Images/modern.png',
    },
    {
      name: 'Ana',
      position: 'Customer Care Manager',
      bio: 'Ana manages client logistics ensuring the entire process runs smoothly. From order placement to final delivery, she keeps clients informed and makes sure their needs are addressed promptly and professionally.',
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
        Meet the Dller Team
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
                  <Typography variant="subtitle1" sx={{ color: '#c41230', marginBottom: '8px' }}>
                    {member.position}
                  </Typography>
                  <Typography variant="body2">{member.bio}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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

export default OurTeam;
