import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Modern from './components/OurKitchens/Modern';
import Classic from './components/OurKitchens/Classic';
import European from './components/OurKitchens/European';
import Unique from './components/OurKitchens/Unique';
import './App.css';
import { styled } from '@mui/system';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services';
import WhyDller from './components/WhyDller';
import ContactUs from './components/ContactUs';
import HomePage from './components/Homepage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';

const MainContent = styled('div')({
  paddingTop: '150px',  // Ajusta este valor según la altura de tu navbar
}); 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <MainContent>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modern" element={<Modern />} />
        <Route path="/classic" element={<Classic />} />
        <Route path="/european" element={<European />} />
        <Route path="/unique" element={<Unique />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-dller" element={<WhyDller />} />
        <Route path="/contact" element={<ContactUs />} />
        </Routes>
        </MainContent>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

