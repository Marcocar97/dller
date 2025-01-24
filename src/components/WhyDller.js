import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

// Estilos para el diseño
const styles = {
  coverContainer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: `url('/Images/why.webp')`,
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
  image: {
    width: '90%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
  columnContent: {
    padding: '16px',
  },
  iconContainer: {
    fontSize: '50px',
    color: '#c41230',
    marginBottom: '10px',
  },
};

function WhyDller() {
  return (
    <Box>
      {/* Imagen de portada */}
      <Box sx={styles.coverContainer}>
        <Typography sx={styles.coverText}>Why Dller</Typography>
      </Box>

      {/* Contenido principal */}
      <Box sx={styles.content}>
        <Typography variant="h5" sx={styles.sectionTitle}>
          The Dller Difference
        </Typography>
        <Typography variant="h8" sx={styles.sectionTitle}>
        Why Dller: Your Trusted Partner in Luxury Kitchen Manufacturing
        <br />
        <br />
        </Typography>
        <Typography variant="body1" gutterBottom>
        At <strong>Dller</strong>, we believe exceptional kitchens are born from a synergy of creativity, precision, and craftsmanship. As a premier luxury kitchen manufacturer, we specialize in partnering with kitchen companies across the UK and Europe to bring their designs to life with the utmost discretion and professionalism. Here's why Dller is the partner of choice for forward-thinking kitchen brands.
        </Typography>

        <Divider sx={{ my: 4 }} />

        {/* Sección con columnas */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={styles.columnContent}>
              <Box sx={styles.iconContainer}>✨</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Unmatched Quality
              </Typography>
              <Typography variant="body1" gutterBottom>
              Every kitchen we build is with the highest quality materials, and the best skills in the industry.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={styles.columnContent}>
              <Box sx={styles.iconContainer}>🌱</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Sustainability
              </Typography>
              <Typography variant="body1" gutterBottom>
              We look to source sustainably, minimising waste and recycling off cuts.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={styles.columnContent}>
              <Box sx={styles.iconContainer}>💡</Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Innovative Design
              </Typography>
              <Typography variant="body1" gutterBottom>
              Our team constantly look to innovate, incorporating design features and investing in new technology 
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Sección con tarjetas */}
        <box> 
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c41230'}}>
        A Commitment to Excellence
        <br />
        <br />
              </Typography>
              <Typography variant="body1" gutterBottom sx={{textAlign: 'left'}}>
              We understand that luxury kitchens demand nothing less than perfection. Dller combines cutting-edge technology with time-honoured craftsmanship to ensure every piece reflects the highest standards of quality. Our facility combines modern technologies and skilled craftsmen to create kitchens that meet your needs.
              </Typography>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c41230' }}>
              Your Designs, Our Expertise
              <br />
        <br />
              </Typography>
              <Typography variant="body1" gutterBottom sx={{textAlign: 'left'}}>
              At Dller, your vision is our mission. We collaborate closely with your team to understand your brand’s unique needs, ensuring every detail aligns with your design philosophy. Whether it’s intricate woodwork, flawless finishes, modern or classical, we transform your ideas and designs into reality with precision and care. 
              </Typography>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c41230' }}>
              Discreet and Reliable Partnership
              <br />
        <br />
              </Typography>
              <Typography variant="body1" gutterBottom sx={{textAlign: 'left'}}>
              We value the trust you place in us. As a silent partner in your production process, we maintain strict confidentiality and ensure our role remains behind the scenes. Our goal is to empower your brand to shine while providing seamless, reliable manufacturing support. 
              </Typography>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c41230' }}>
              Tailored Solutions for Every Project
              <br />
        <br />
              </Typography>
              <Typography variant="body1" gutterBottom sx={{textAlign: 'left'}}>
              Every kitchen tells a story. That’s why Dller offers customized solutions to bring your designs to life. From bespoke cabinetry to revolutionary storage solutions, we tailor our production processes to meet your specific requirements, no matter how complex or ambitious. 
              </Typography>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c41230' }}>
              Sustainability at the Core
              <br />
        <br />
              </Typography>
              <Typography variant="body1" gutterBottom sx={{textAlign: 'left'}}>
              We are constantly looking at ways to be more sustainable whether that is though responsible sourcing, minimising waste and most recently investing in innovative heating solutions to fuel our factory entirely from waste.. By choosing Dller, you contribute to a greener future without compromising on quality or style. 
              </Typography>
              <Divider sx={{ my: 4 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#c41230' }}>
              Why Choose Dller?
              <br />
        <br />
              </Typography>
              <Typography variant="body1" gutterBottom sx={{textAlign: 'left'}}>
              <lu>
                <li> <strong> Unparalleled Quality:</strong> Flawless craftsmanship meets advanced manufacturing.</li>
                <br />
        <br />
                <li> <strong> Dedicated Collaboration:</strong> A true extension of your team, understanding your needs inside out.</li>
                <br />
        <br />
                <li> <strong> Confidentiality Assured:</strong> A discreet partnership built on trust. </li>
                <br />
        <br />
                <li> <strong> Innovative Solutions:</strong> Pushing boundaries to achieve your creative vision. </li>
                <br />
        <br />
                <li> <strong> Sustainability Focused:</strong> Luxury production with a conscience. </li>
              </lu>
              </Typography>
              <Divider sx={{ my: 4 }} />
        </box>

        {/* Texto destacado final */}
        <Typography variant="h5" sx={styles.sectionTitle}>
        Partner with Dller, and let us help you redefine luxury in the kitchen. Together, we’ll create designs that inspire, endure, and elevate the art of living.
        </Typography>
        <Box
          component="img"
          src="/Images/ms.JPG"
          alt="Transform Your Space"
          sx={styles.image}
        />
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

export default WhyDller;
