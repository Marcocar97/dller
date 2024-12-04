import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';

const styles = {
  heroSection: {
    position: 'relative',
    width: '100%',
    height: '70vh',
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  heroTextContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textAlign: 'center',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
    zIndex: 2,
  },
  heroText: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '20px',
    textTransform: 'uppercase',
    color: '#E30613',
    textAlign: 'center',
  },
  video: {
    width: '100%',
    height: 'auto',
    marginTop: '30px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  gridSection: {
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

const carouselItems = [
  {
    image: '/Images/modern.png',
    text: 'Design Your Dream Kitchen',
  },
  {
    image: '/Images/4.jpg',
    text: 'Transforming Spaces into Art',
  },
  {
    image: '/Images/modern.png',
    text: 'Innovative Solutions, Timeless Designs',
  },
  {
    image: '/Images/3.jpg',
    text: 'Experience Elegance in Every Detail',
  },
];

const HomePage = () => {
  return (
    <Box>
      {/* Hero Section with Carousel */}
      <Box sx={styles.heroSection}>
      <Carousel
  indicators={false}
  navButtonsAlwaysVisible
  interval={3000} // Time (in milliseconds) between automatic slide transitions
  animation="fade"
  autoPlay={true} // Enables auto-play
>
  {carouselItems.map((item, index) => (
    <Box key={index} style={{ position: 'relative', height: '70vh' }}>
      <img
        src={item.image}
        alt={item.text}
        style={styles.heroImage}
      />
      <Box sx={styles.heroTextContainer}>
        <Typography sx={styles.heroText}>{item.text}</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#E30613',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#CC0511',
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  ))}
</Carousel>
      </Box>

      {/* Introduction Section */}
      <Box sx={{ padding: '40px', textAlign: 'center' }}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Welcome to Dller Kitchens
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          At Dller Kitchens, we believe that every kitchen tells a story. Our mission is to create custom-made kitchens
          that not only meet your needs but also reflect your personality. From design to execution, we deliver
          exceptional quality and timeless elegance.
        </Typography>
      </Box>

      {/* Video Section */}
      <Box sx={{ padding: '40px', textAlign: 'center' }}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Watch Our Story
        </Typography>
        <video controls style={styles.video}>
          <source src="/Images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      {/* Grid Section */}
      <Box sx={{ padding: '40px' }}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={4}>
            <Box sx={styles.gridSection}>
              <img
                src="/Images/2.jpg"
                alt="Quality"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Unmatched Quality
              </Typography>
              <Typography variant="body1">
                Our kitchens are built with precision and care to ensure the highest quality.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={styles.gridSection}>
              <img
                src="/Images/1.jpg"
                alt="Innovation"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Innovative Designs
              </Typography>
              <Typography variant="body1">
                Combining aesthetics with functionality, our designs are tailored to your lifestyle.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={styles.gridSection}>
              <img
                src="/Images/3.jpg"
                alt="Sustainability"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Sustainability
              </Typography>
              <Typography variant="body1">
                We use eco-friendly materials and sustainable processes in every project.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
