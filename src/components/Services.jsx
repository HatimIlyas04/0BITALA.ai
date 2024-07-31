// Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const Services = () => (
  <section id="services" className="services section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Services</h2>
      <p>Découvrez nos services innovants utilisant l'intelligence artificielle pour vous aider dans votre recherche d'emploi et votre développement professionnel.</p>
    </div>
    <div className="container">
      <div className="row gy-4">
        <ServiceItem 
          icon="bi-search" 
          title="Recherche d'Emploi Assistée par IA" 
          description="Utilisez notre IA pour analyser les offres d'emploi et trouver les meilleures opportunités adaptées à votre profil."
          link="/service/recherche-emploi"
          delay="100"
        />
        <ServiceItem   
          icon="bi-pencil" 
          title="Optimisation de CV avec IA" 
          description="Obtenez des suggestions personnalisées pour améliorer votre CV et augmenter vos chances de succès."
          link="/service/optimisation-cv"
          delay="200"
        />
        <ServiceItem 
          icon="bi-person-lines-fill" 
          title="Préparation aux Entretiens avec IA" 
          description="Préparez-vous pour vos entretiens avec des simulations basées sur l'IA pour évaluer et améliorer vos réponses."
          link="/service/preparation-entretiens"
          delay="300"
        />
        <ServiceItem 
          icon="bi-people" 
          title="Analyse de Compétences" 
          description="Recevez un rapport détaillé sur vos compétences et des recommandations pour les améliorer en fonction des exigences du marché."
          link="/service/analyse-competences"
          delay="400"
        />
        <ServiceItem 
          icon="bi-bar-chart" 
          title="Prévisions de Carrière" 
          description="Utilisez l'IA pour analyser les tendances du marché du travail et planifier vos objectifs professionnels futurs."
          link="/service/previsions-carriere"
          delay="500"
        />
        <ServiceItem 
          icon="bi-calendar2-check" 
          title="Planification de Développement Personnel" 
          description="Créez un plan de développement personnel personnalisé basé sur les recommandations de notre IA pour atteindre vos objectifs professionnels."
          link="/service/planification-developpement"
          delay="600"
        />
      </div>
    </div>
  </section>
);

export default Services;
