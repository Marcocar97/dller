import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Dialog, DialogContent, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

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
    color: '#c41230',
    textAlign: 'center',
  },
  sectionSecondTitle: {
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#666',
    textAlign: 'center',
  },
  video: {
    width: '90%',
    maxHeight: '80vh', // Ajusta este valor para cambiar la altura máxima del video
    objectFit: 'cover', // Mantiene la proporción del contenido sin distorsionarse
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
    image: '/Images/s1.jpg',
    text: 'Complete Discretion',
  },
  {
    image: '/Images/s2.jpg',
    text: 'Aunthentic Luxury Manufacturing',
  },
  {
    image: '/Images/s3.jpg',
    text: 'Your Partner in Production',
  },
  {
    image: '/Images/s4.png',
    text: 'You Design It, We Create It',
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
      name: 'Modern Kitchens',
      images: ['/Images/m1.jpg', '/Images/m2.jpg', '/Images/m3.jpg', '/Images/m4.jpg', '/Images/m7.jpg', '/Images/m8.jpg', '/Images/m9.jpg'],
      coverImage: '/Images/m1.jpg',
    },
    {
      name: 'Classic Kitchens',
      images: ['/Images/c1.jpg', '/Images/c2.jpg', '/Images/c3.jpg', '/Images/c4.jpg', '/Images/c5.jpg', '/Images/c6.jpg', '/Images/c8.jpg', '/Images/c9.jpg', '/Images/c10.jpg', '/Images/c13.jpg', '/Images/c14.jpg', '/Images/c15.jpg', '/Images/c16.jpg', '/Images/c19.jpg', '/Images/c20.jpg', '/Images/c21.jpg', '/Images/c22.jpg', '/Images/c28.jpg', '/Images/c29.jpg'],
      coverImage: '/Images/c5.jpg',
    },
    {
      name: 'European Kitchens',
      images: ['/Images/e1.jpg', '/Images/e2.jpg', '/Images/e3.jpg', '/Images/e4.jpg', '/Images/e5.jpg', '/Images/e6.jpg', '/Images/e7.jpg', '/Images/e8.jpg', '/Images/e9.jpg', '/Images/e10.jpg', '/Images/e11.jpg', '/Images/e12.jpg', '/Images/e13.jpg', '/Images/e14.jpg', '/Images/e15.jpg', '/Images/e16.jpg', '/Images/e17.jpg', '/Images/e18.jpg', '/Images/e19.jpg', ],
      coverImage: '/Images/e13.jpg',
    },
    {
      name: 'Unique Kitchens',
      images: ['/Images/u1.jpg', '/Images/u2.jpg', '/Images/u3.jpg', '/Images/u4.jpg', '/Images/u5.jpg', '/Images/u5.jpg', '/Images/u6.jpg', '/Images/u10.jpg', '/Images/u11.jpg', '/Images/u12.jpg', '/Images/u13.jpg', '/Images/u14.jpg', '/Images/u15.jpg'],
      coverImage: '/Images/u12.jpg',
    },
  ];

const HomePage = () => {

  // Función de precarga de imágenes
  const preloadImages = (imageArray) => {
    imageArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  };

  // Precargar imágenes de todas las galerías al montar el componente
  useEffect(() => {
    kitchenStyles.forEach((style) => {
      // Precarga la imagen de portada
      preloadImages([style.coverImage]);
      // Precarga todas las imágenes de la galería
      preloadImages(style.images);
    });
  }, []);

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
  interval={5000} // Time (in milliseconds) between automatic slide transitions
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
        component={Link}
        to="/contact" 
          variant="contained"
          sx={{
            backgroundColor: '#c41230',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#CC0511',
            },
          }}
        >
          Get In Touch
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
        <Typography variant="h6" sx={styles.sectionSecondTitle}>
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
         {/* Video Section */}
         <Box sx={{ padding: '40px', textAlign: 'center' }}>
            <video controls style={styles.video}>
            <source src="/Images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag..
            </video>
        </Box>
               <Typography variant="body1" sx={{ color: '#666', maxWidth: '90%', margin: '0 auto', textAlign: 'left' }}>
            <strong>Experts in Handmade Excellence</strong>
            <br />
            At <strong>Dller</strong> we specialize in crafting custom-made wooden kitchens tailored to your clients' exact specifications. With over three decades of expertise, a team of 40+ highly skilled carpenters, and a commitment to quality, we deliver bespoke kitchens to your designs with our superior craftsmanship.

        </Typography>

      {/* Grid Section */}
      <Box sx={{ padding: '40px' }}>
        <Typography variant="h4" sx={styles.sectionTitle}>
          Why Choose Us
        </Typography>
        <Grid container spacing={4} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={4}>
            <Box sx={styles.gridSection}>
              <img
                src="/Images/at.JPG"
                alt="Quality"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', height: '200px' }}
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
                src="/Images/skl.png"
                alt="Innovation"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', height: '200px' }}
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
                src="/Images/mtc.png"
                alt="Sustainability"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', height: '200px' }}
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
                src="/Images/ss3.jpg"
                alt="Innovation"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', height: '200px' }}
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
                src="/Images/pr.png"
                alt="Innovation"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', height: '200px'  }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Competitive Pricing
              </Typography>
              <Typography variant="body1">
              Working in partnership to meet your needs.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={styles.gridSection}>
              <img
                src="/Images/cd.jpg"
                alt="Innovation"
                style={{ width: '100%', borderRadius: '8px', marginBottom: '20px', height: '200px' }}
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
          boxSizing: 'border-box',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transición suave para el aumento y sombra
        }}
        onMouseEnter={(e) => {
          // Efecto al pasar el mouse
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          // Vuelve a la normalidad cuando se deja de pasar el mouse
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
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
            transition: 'transform 0.3s ease', // Asegura que la imagen también tenga una transición suave
          }}
        />
        <Typography
          component="span"
          style={{
            fontWeight: 'bold',
            marginTop: '10px',
            textAlign: 'center',
            color: '#c41230',
            textTransform: 'none',
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
};

export default HomePage;
