import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import TeamSection from './components/TeamSection';
import CallToActionSection from './components/CallToActionSection';
import ContactSection from './components/ContactSection';
import RechercheEmploi from './components/RechercheEmploi'; // Import the component
import OptimisationCV from './components/OptimisationCV'; // Import the OptimisationCV component

function App() {
  return (
    <Router>
      <div className="starter-page-page">
        <Header />
        <Routes>
          {/* Define routes */}
          <Route path="/" element={
            <>
              <Hero />
              <Clients />
              <About />
              <Services />
              <PricingSection />
              <FaqSection />
              <TeamSection />
              <CallToActionSection />
              <ContactSection />
            </>
          } />
          <Route path="/service/recherche-emploi" element={<RechercheEmploi />} />
          <Route path="/service/optimisation-cv" element={<OptimisationCV />} /> {/* New route */}
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
