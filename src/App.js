import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Modern from './components/OurKitchens/Modern';
import './App.css';
import { styled } from '@mui/system';
import AboutUs from './components/AboutUs/AboutUs';

const MainContent = styled('div')({
  paddingTop: '150px',  // Ajusta este valor según la altura de tu navbar
}); 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContent>
        <Routes>
        <Route path="/kitchens/modern" element={<Modern />} />
        <Route path="/about" element={<AboutUs />} />
        </Routes>
        </MainContent>
      </div>
    </Router>
  );
}

export default App;

