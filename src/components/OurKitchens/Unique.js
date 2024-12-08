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
    height: 'auto',
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
  

// Componente principal "Unique"
const Unique = () => {
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
      title: 'Delicadeza Moderna',
      description: 'A la hora de renovar su piso, esta pareja deseaba crear un espacio luminoso...',
      images: ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg'],
      coverImage: '/Images/4.jpg',
    },
    {
      title: 'Cocina Minimalista',
      description: 'Diseño moderno y limpio, con elementos minimalistas que aprovechan el espacio...',
      images: ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg'],
      coverImage: '/Images/4.jpg',
    },
    {
      title: 'Cocina Contemporánea',
      description: 'Estilo contemporáneo con una mezcla de materiales naturales y modernos...',
      images: ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg'],
      coverImage: '/Images/4.jpg',
    },
  ];


  return (
    <Box>
      {/* Portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>If you can Design it we can create it </Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={styles.sectionTitle}>Discover Our Unique Kitchen Designs</Typography>
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
    We specialize in crafting the natural beauty of <strong>Unique Wood Kitchens</strong>, where bespoke designs meet exceptional craftsmanship to create one-of-a-kind spaces. These kitchens feature hallmark elements such as hand-selected wood grains, custom finishes, and intricate detailing, blending timeless elegance with modern functionality. Designed to your specifications, we can bring any vision to life, from rustic charm to contemporary sophistication.
        <br />
        <br />
        For a distinctive touch, farmhouse-inspired styles incorporate exposed beams, reclaimed wood cabinets, and warm, inviting tones, while <strong>modern wood kitchens</strong> emphasize sleek, minimalist lines and innovative storage solutions. Alternatively, <strong>artisan-crafted kitchens</strong> showcase bold, statement-making designs with custom joinery, intricate carvings, and unique textures. Key features like live-edge countertops, wood-panelled islands, and custom stains or paints highlight the natural beauty of the materials, ensuring each kitchen is a true original.
        <br />
        <br /> 
        If you can design it, we can create it. Whatever your brand’s vision, let us help you bring the perfect <strong>Unique Wood Kitchen</strong> to life with bespoke solutions tailored to your company's and clients’ style and needs.
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
                <Button
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
                </Button>
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

export default Unique;
