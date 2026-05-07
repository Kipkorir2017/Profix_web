import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import SpareParts from '../pages/SpareParts';
import Contact from '../pages/Contact';
import MainLayout from '../layouts/MainLayout';

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/spare-parts" element={<SpareParts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;