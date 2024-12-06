import React, { useState } from 'react';
import { Dialog, DialogContent, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';

// Estilización del diálogo para que abarque toda la pantalla
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

const ProgressIndicators = ({ count, currentIndex }) => {
  return (
    <Box display="flex" justifyContent="center" position="absolute" bottom="20px" width="100%">
      {Array.from({ length: count }, (_, i) => (
        <Box
          key={i}
          width="10px"
          height="10px"
          ml={i > 0 ? 1 : 0}
          bgcolor={currentIndex === i ? 'transparent' : '#fff'}
          border="2px solid #fff"
          borderRadius="50%"
        />
      ))}
    </Box>
  );
};

const European = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [popupImages, setPopupImages] = useState([]);
  const [popupDescription, setPopupDescription] = useState('');

  const handleOpenPopup = (description, images) => {
    setPopupDescription(description);
    setPopupImages(images);
    setCurrentImageIndex(0);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((current) => (current + 1) % popupImages.length); // Vuelve al principio después del último
  };

  const handlePrev = () => {
    setCurrentImageIndex((current) => (current - 1 + popupImages.length) % popupImages.length); // Vuelve al último después del primero
  };

  // Las cocinas modernas con imágenes de portada y descripciones
  const modernKitchens = [
    {
      title: 'Delicadeza Moderna',
      description: 'A la hora de renovar su piso, esta pareja entrada en los cuarenta, deseaba ante todo crear un espacio luminoso en el que convivieran naturaleza y colores armoniosos. Eso es lo que les sedujo especialmente en esta cocina. El motivo Botanic Black asociado al color Mossa y al tono Stone Grey crea un ambiente vegetal especialmente logrado. Perfectamente adaptada a la forma de la habitación, la cocina en U forma un espacio para compartir momentos en familia, especialmente alrededor de la isla, que contribuye a delimitar claramente la estancia. ',
      images: ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg'],
      coverImage: '/Images/1.jpg',
    },
    {
      title: 'Cocina Minimalista',
      description: 'A la hora de renovar su piso, esta pareja entrada en los cuarenta, deseaba ante todo crear un espacio luminoso en el que convivieran naturaleza y colores armoniosos. Eso es lo que les sedujo especialmente en esta cocina. El motivo Botanic Black asociado al color Mossa y al tono Stone Grey crea un ambiente vegetal especialmente logrado. Perfectamente adaptada a la forma de la habitación, la cocina en U forma un espacio para compartir momentos en familia, especialmente alrededor de la isla, que contribuye a delimitar claramente la estancia. ',
      images: ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg'],
      coverImage: '/Images/1.jpg',
    },
    {
      title: 'Cocina Elegante',
      description: 'A la hora de renovar su piso, esta pareja entrada en los cuarenta, deseaba ante todo crear un espacio luminoso en el que convivieran naturaleza y colores armoniosos. Eso es lo que les sedujo especialmente en esta cocina. El motivo Botanic Black asociado al color Mossa y al tono Stone Grey crea un ambiente vegetal especialmente logrado. Perfectamente adaptada a la forma de la habitación, la cocina en U forma un espacio para compartir momentos en familia, especialmente alrededor de la isla, que contribuye a delimitar claramente la estancia.',
      images: ['/Images/1.jpg', '/Images/2.jpg', '/Images/3.jpg'],
      coverImage: '/Images/1.jpg',
    },
  ];



  return (
    <Box>
      {/* Portada con título */}
      <Box
  style={{
    position: 'relative',
    height: '350px',
    backgroundImage: 'url(/Images/modern.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <Box
    style={{
      position: 'absolute',
      bottom: 0,
      width: '100%',
      marginBottom: '11%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro transparente
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra de texto
      textAlign: 'center',
      padding: '10px 20px',
    }}
  >
    <Typography
      variant="h2"
      style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
      }}
    >
      Authentic European Modernity 
    </Typography>
  </Box>
</Box>
      {/* Descripción debajo de la imagen */}
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
       We can craft the sleek sophistication of <strong>European Design Kitchens</strong>, where cutting-edge innovation meets contemporary elegance and functionality. These kitchens feature hallmark elements such as clean, minimalist lines, flat-panel cabinetry, high-gloss finishes, or textured wood veneers, blending modern aesthetics with practical efficiency. Designed to your specifications, we can create <strong>frameless cabinetry</strong> for a streamlined look, handleless doors for a sleek, seamless finish, or bold statement pieces that combine functionality with striking design.
        <br />
        <br />
        For a refined touch, <strong>Scandinavian-inspired styles</strong> emphasize light woods, muted tones, and natural materials, creating a bright and airy atmosphere. Alternatively, <strong>German-engineered</strong> kitchens deliver precision, durability, and smart storage solutions, while <strong>Italian designs</strong> exude luxury with rich textures, bold colors, and innovative features. Key elements such as integrated appliances, intelligent lighting, and durable surfaces like quartz or ceramic complete the modern European aesthetic.
        <br />
        <br />
        Whatever your brand’s vision, let us help you create the perfect <strong>European Design Kitchen</strong> with bespoke solutions tailored to your company's and clients’ style and needs.
      </Typography>

    <Box>
      {/* Galería de cocinas */}
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '50px',
          flexWrap: 'wrap',
        }}
      >
        {modernKitchens.map((kitchen, index) => (
          <Box
            key={index}
            style={{
              width: '45%',
              minWidth: '300px',
              marginBottom: '30px',
              cursor: 'pointer',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column', // Organiza el contenido en columna
              alignItems: 'center', // Centra el contenido horizontalmente
            }}
            onClick={() => handleOpenPopup(kitchen.description, kitchen.images)}
          >
            <img
              src={kitchen.coverImage}
              alt={kitchen.title}
              style={{
                width: '100%',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0', // Redondea solo las esquinas superiores
              }}
            />
            <Typography
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                backgroundColor: '#c41230',
                padding: '5px 10px',
                borderRadius: '5px',
                width: '100%', // Asegura que el texto se extienda a lo ancho
                textAlign: 'center', // Centra el texto horizontalmente
              }}
            >
              {kitchen.title}
            </Typography>
            <Typography
              style={{
                color: '#fff',
                fontSize: '1rem',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                padding: '10px',
                borderRadius: '5px',
                width: '100%', // Asegura que el texto se extienda a lo ancho
                marginTop: '10px', // Espacio entre el título y la descripción
              }}
            >
              {kitchen.description}
            </Typography>
          </Box>
        ))}
      </Box>
      </Box>

     {/* Popup para ver más fotos */}
     <StyledDialog open={openPopup} onClose={handleClosePopup} fullScreen>
        <CloseButton onClick={handleClosePopup}><CloseIcon /></CloseButton>
        <DialogContent>
          <Box position="relative" width="100%" height="100%">
            <img
              src={popupImages[currentImageIndex]}
              alt={`kitchen ${currentImageIndex}`}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
            <ProgressIndicators count={popupImages.length} currentIndex={currentImageIndex} />
            <PrevButton onClick={handlePrev}><ChevronLeftIcon /></PrevButton>
<NextButton onClick={handleNext}><ChevronRightIcon /></NextButton>
          </Box>
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

export default European;
