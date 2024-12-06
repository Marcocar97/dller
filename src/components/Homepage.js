import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogContent, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from '@mui/material';

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
  sectionSecondTitle: {
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#666',
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
  imageHome: {
    width: '90%',
    height: '500px',
    marginTop: '0px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

// Estilos para el contenedor Image
const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centra horizontalmente
    alignItems: 'center', // Centra verticalmente (si es necesario)
    height: '100vh', // Altura del viewport para centrado vertical completo
    width: '100%', // Asume el ancho completo (ajusta según necesites)
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

const StyledDialog = styled(Dialog)(() => ({
    '& .MuiDialog-paper': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      width: '100%',
      height: '90vh',
      margin: 0,
      maxWidth: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      padding: '0', // Se elimina el padding para que la imagen pueda ocupar todo el espacio
      position: 'relative',
      display: 'flex',
      alignItems: 'center', // Centra la imagen y los botones verticalmente
      justifyContent: 'center', // Centra la imagen horizontalmente
    },
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  }));
  
  const CloseButton = styled(Button)({
    position: 'absolute',
    top: '5%',
    right: '20%',
    right: '20px',  // Ajusta esta posición para alinear con el borde derecho de la imagen si es necesario
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo ligeramente transparente
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',  // Cambio de color al pasar el ratón por encima
    },
    zIndex: 1050,
  });
  
  const NavigationButton = styled(Button)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1000, // Asegura que el botón esté sobre otros elementos si es necesario
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
  }));
  
  const PrevButton = styled(NavigationButton)({
    left: 'calc(5% + 10px)', // Ajusta esta cantidad para acercar más el botón a la imagen
  });
  
  const NextButton = styled(NavigationButton)({
    right: 'calc(5% + 10px)', // Ajusta esta cantidad para acercar más el botón a la imagen
  });
  

// Datos de los estilos de cocinas
const kitchenStyles = [
    {
      name: 'Modern',
      images: ['/Images/modern.png', '/Images/modern.png', '/Images/modern.png', '/Images/modern.png', '/Images/modern.png'],
      coverImage: '/Images/1.jpg',
    },
    {
      name: 'Classic',
      images: ['/Images/1.jpg', '/Images/2.jpg', '/Images/1.jpg', '/Images/2.jpg', '/Images/1.jpg'],
      coverImage: '/Images/1.jpg',
    },
    {
      name: 'European',
      images: ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg', '/Images/4.jpg', '/Images/1.jpg'],
      coverImage: '/Images/1.jpg',
    },
    {
      name: 'Unique',
      images: ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg', '/Images/1.jpg', '/Images/4.jpg'],
      coverImage: '/Images/1.jpg',
    },
  ];

const HomePage = () => {

    const [openPopup, setOpenPopup] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detecta pantallas pequeñas


  const handleOpenPopup = (images) => {
    setCurrentImages(images);
    setCurrentImageIndex(0);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((current) => (current + 1) % currentImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((current) => (current - 1 + currentImages.length) % currentImages.length);
  };

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
          More Info
        </Button>
      </Box>
    </Box>
  ))}
</Carousel>
      </Box>

      {/* Introduction Section */}
      <Box sx={{ padding: '40px', textAlign: 'center' }}>
        <Typography variant="h4" sx={styles.sectionTitle}>
        Supplying the luxury Kitchen industry for Over 35 Years
        </Typography>
        <Typography variant="h5" sx={styles.sectionSecondTitle}>
        "Your Trusted Partner in Creating Handmade Kitchens, Combining Timeless Craftsmanship with Modern Innovation."
        <br />
        </Typography>
        <Typography variant="body1" sx={{ color: '#666', maxWidth: '90%', margin: '0 auto', textAlign: 'left' }}>
            <br />
        We pride ourselves on confidentiality, we have been making furniture for some of Europe’s most exclusive brands for over 3 decades, combining their creativity with our craftsmanship to deliver exceptional Kitchen creations. 
        <br />
        <br />
We work in partnership with a small number of Kitchen companies to take the worry out of production, delivering exceptional quality, so you can focus on delivering your customers exceptional service. 

        </Typography>
      </Box>

      {/* Image Section */}
      <div style={containerStyle}> 
      <Box 
                component="img" 
                src="/Images/modern.png" 
                alt="Excellence in Design" 
                sx={styles.imageHome} 
              />
              </div>
               <Typography variant="body1" sx={{ color: '#666', maxWidth: '90%', margin: '0 auto', textAlign: 'left' }}>
            <strong>Experts in Handmade Excellence</strong>
            <br />
            At <strong>Dller</strong> we specialize in crafting custom-made wooden kitchens tailored to your clients' exact specifications. With over three decades of expertise, a team of 40+ highly skilled carpenters, and a commitment to quality, we deliver bespoke kitchens to your designs with our superior craftsmanship.

        </Typography>

           {/* Video Section */}
      <Box sx={{ padding: '40px', textAlign: 'center' }}>
            <video controls style={styles.video}>
            <source src="/Images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag..
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
              Expertise
              </Typography>
              <Typography variant="body1">
              35 years of creating bespoke kitchens
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
              Skilled Craftsmanship
              </Typography>
              <Typography variant="body1">
              A team of over 40 dedicated carpenters and designers.
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
              Modern Technology
              </Typography>
              <Typography variant="body1">
              Precision ensured with state-of-the-art tools.
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
              Tailored Solutions
              </Typography>
              <Typography variant="body1">
              Kitchens designed to meet your unique designs.
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
              Competitive Pricing:
              </Typography>
              <Typography variant="body1">
              Working in partnership to meet your needs.
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
        </Grid>
      </Box>
{/* Show case seccion*/}

      <Typography variant="h5" sx={styles.sectionSecondTitle}>
      Explore Our Craftsmanship
        </Typography>

        <Box>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center">
  {kitchenStyles.map((style, index) => (
    <Button
      key={index}
      onClick={() => handleOpenPopup(style.images)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20,
        padding: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        width: isMobile ? 'calc(100% - 40px)' : 'calc(25% - 40px)', // 100% en móviles para un botón por fila, 25% para cuatro botones por fila en pantallas más grandes
        boxSizing: 'border-box'
      }}
    >
      <img
        src={style.coverImage}
        alt={style.name}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: '8px 8px 0 0',
        }}
      />
      <Typography
        component="span"
        style={{
          fontWeight: 'bold',
          marginTop: '10px',
          textAlign: 'center',
          color: 'red',
        }}
      >
        {style.name}
      </Typography>
    </Button>
  ))}
</Box>



      <StyledDialog open={openPopup} onClose={handleClosePopup}>
        <DialogContent>
          <img src={currentImages[currentImageIndex]} alt="Showcase image" style={{ width: '100%', height: '80vh', objectFit: 'contain' }} />
          <PrevButton onClick={handlePrev}><ChevronLeftIcon /></PrevButton>
          <NextButton onClick={handleNext}><ChevronRightIcon /></NextButton>
          <CloseButton onClick={handleClosePopup}><CloseIcon /></CloseButton>
        </DialogContent>
      </StyledDialog>
    </Box>

    <Typography variant="h5" sx={styles.sectionSecondTitle}>
        <br />
        <br />
    "IF YOU CAN IMAGINE IT WE CAN MAKE IT”
        </Typography>
    </Box>
  );
};

export default HomePage;
