import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Dialog, DialogContent, Button } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

// Estilos para el diseño, utilizando la estructura de estilos de la página de Servicios
const styles = {
  coverContainer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: 'url("/Images/modern.png")', // Imagen de portada
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
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '16px',
    textTransform: 'uppercase',
    color: '#c41230',
    textAlign: 'center',
  },
  card: {
    marginBottom: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Agregar la transición
    '&:hover': {
      transform: 'scale(1.05)', // Escala al pasar el mouse
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Aumenta la sombra al hacer hover
    },
  },
  image: {
    width: '100%',
    height: '200px',
    maxHeight: '300px',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  cardContent: {
    padding: '16px',
  },
};

// Componente de galería para mostrar las imágenes en el popup
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

  const CustomButton = styled(Button)({
    color: '#c41230', // Color del texto
    borderColor: '#c41230', // Color del borde
    '&:hover': {
      backgroundColor: '#c41230', // Color de fondo al hacer hover
      color: '#fff', // Color del texto al hacer hover
      borderColor: '#c41230', // Mantener el borde en el color deseado
    },
  });
  

// Componente principal "Modern"
const Modern = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [currentImages, setCurrentImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  // Datos de las cartas y sus imágenes
  const modernKitchens = [
    {
      title: 'Vibrant Modernity',
      description: 'A contemporary kitchen with bold yellow accents and a vibrant feature wall, modern vibe.',
      images: ['/Images/m7.jpg', '/Images/m8.jpg', '/Images/m9.jpg'],
      coverImage: '/Images/m9.jpg',
    },
    {
      title: 'Function Meets Style',
      description: 'Sleek lines and neutral tones create a simple yet inviting modern kitchen design.',
      images: ['/Images/m1.jpg', '/Images/m2.jpg'],
      coverImage: '/Images/m1.jpg',
    },
    {
      title: 'Modern Versatility',
      description: 'A blend of modern and classic elements, offering style and practicality for any home.',
      images: ['/Images/m3.jpg', '/Images/m4.jpg'],
      coverImage: '/Images/m3.jpg',
    },
  ];


  return (
    <Box>
      {/* Portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>Modern Simplicity</Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={styles.sectionTitle}>Discover Our Modern Kitchen Designs</Typography>
        <Typography
        variant="body1"
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#fff',
          color: '#666',
          textAlign: 'center',
        }}
      > 
        We specialize in crafting the bold charm of <strong>Industrial Kitchen Designs</strong>, where raw materials meet functional elegance to create striking, modern spaces. These kitchens feature hallmark elements such as exposed metal accents, reclaimed wood surfaces, and sleek, practical layouts, blending rugged aesthetics with everyday usability. Designed to your specifications, we can incorporate industrial-style shelving, open layouts, and mixed textures for a bold, contemporary statement.
        <br />
        <br />
        For a distinctive touch, <strong>urban loft-inspired styles</strong> combine concrete countertops, steel-framed cabinets, and natural wood finishes, while <strong>rustic industrial designs</strong> emphasize warm, weathered materials and vintage-inspired hardware. Alternatively, <strong>minimalist industrial kitchens</strong> showcase clean lines with neutral tones and subtle industrial elements for a more refined look. Key details like matte black fixtures, Edison bulb lighting, and distressed finishes complete the aesthetic, creating a space that is as functional as it is eye-catching.
        <br />
        <br />
        Whatever your brand’s vision, let us help you create the perfect <strong>Industrial Kitchen Design</strong> with bespoke solutions tailored to your company's and clients’ style and needs.
      </Typography>
        <Grid container spacing={4} justifyContent="center">
          {modernKitchens.map((kitchen, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={styles.card} onClick={() => handleOpenPopup(kitchen.images)}>
              <CardMedia
                component="img"
                height="200"
                image={kitchen.coverImage}
                alt={kitchen.title}
                sx={styles.image}
              />
              <CardContent sx={styles.cardContent}>
                <Typography gutterBottom variant="h6" component="div">
                  {kitchen.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {kitchen.description}
                </Typography>
                {/* Botón para ver más fotos */}
                <CustomButton
                  variant="outlined"
                  color="#c41230"
                  onClick={(e) => {
                    e.stopPropagation(); // Para evitar que se active el popup al hacer clic en el botón
                    handleOpenPopup(kitchen.images);
                  }}
                  fullWidth
                  sx={{ marginTop: '10px' }}
                >
                  View Gallery
                </CustomButton>
              </CardContent>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Box>

      {/* Popup de la galería */}
      <StyledDialog open={openPopup} onClose={handleClosePopup}>
        <DialogContent>
          <img src={currentImages[currentImageIndex]} alt="Showcase image" style={{ width: '100%', height: '80vh', objectFit: 'contain' }} />
          <PrevButton onClick={handlePrev}><ChevronLeftIcon /></PrevButton>
          <NextButton onClick={handleNext}><ChevronRightIcon /></NextButton>
          <CloseButton onClick={handleClosePopup}><CloseIcon /></CloseButton>
        </DialogContent>
      </StyledDialog>
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

export default Modern;
