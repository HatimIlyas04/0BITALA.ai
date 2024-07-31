import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const PricingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Tarifs</h2>
        <p style={{ marginBottom: '2rem' }}>Choisissez le plan qui convient le mieux à vos besoins pour optimiser votre recherche d'emploi et développer votre carrière avec notre plateforme basée sur l'IA.</p>
      </div>

      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <div className="row g-4">
          <PricingItem 
            title="Plan Basique"
            price="0"
            features={[
              'Analyse de CV limitée',
              'Accès aux offres d\'emploi',
              'Simulation d\'entretien de base'
            ]}
            unavailableFeatures={[
              'Analyse approfondie des compétences',
              'Prévisions de carrière avancées'
            ]}
            icon="bi bi-box"
          />
          <PricingItem 
            title="Plan Professionnel"
            price="29"
            features={[
              'Analyse complète de CV',
              'Suggestions personnalisées pour les offres d\'emploi',
              'Simulations d\'entretiens avancées',
              'Analyse approfondie des compétences',
              'Prévisions de carrière'
            ]}
            icon="bi bi-rocket"
            featured
          />
          <PricingItem 
            title="Plan Premium"
            price="49"
            features={[
              'Analyse de CV personnalisée avec IA',
              'Recommandations de carrière basées sur l\'IA',
              'Simulations d\'entretiens avec feedback détaillé',
              'Analyse de compétences approfondie',
              'Planification de développement personnel'
            ]}
            icon="bi bi-star"
          />
        </div>
      </div>
    </section>
  );
};

const PricingItem = ({ title, price, features, unavailableFeatures, icon, featured }) => (
  <div className={`col-lg-4${featured ? ' featured' : ''}`}>
    <div className={`pricing-item${featured ? ' featured' : ''}`}>
      <h3>{title}</h3>
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h4><sup>$</sup>{price}<span> / mois</span></h4>
      <ul>
        {features.map((feature, index) => (
          <li key={index}><i className="bi bi-check"></i> <span>{feature}</span></li>
        ))}
        {unavailableFeatures && unavailableFeatures.map((feature, index) => (
          <li key={index} className="na"><i className="bi bi-x"></i> <span>{feature}</span></li>
        ))}
      </ul>
      <div className="text-center"><a href="#" className="buy-btn">S'abonner</a></div>
    </div>
  </div>
);

export default PricingSection;
