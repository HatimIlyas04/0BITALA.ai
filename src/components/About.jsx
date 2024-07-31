import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-xl-center gy-5">
          <div className="col-xl-5 content">
            <h3>À Propos de 0BITALA</h3> {/* Updated header to include project name */}
            <h2>Nous vous aidons à atteindre vos objectifs de carrière avec l'IA</h2>
            <p>
              Nous sommes spécialisés dans l'utilisation de l'intelligence artificielle pour vous offrir des services de qualité à travers notre projet <strong>0BITALA</strong>. Notre mission est de vous aider à trouver un emploi, améliorer votre CV et vous préparer aux entretiens. Grâce à notre expertise en IA, nous fournissons des solutions personnalisées pour chaque étape de votre parcours professionnel.
            </p>
            <a href="#" className="read-more">
              <span>En savoir plus</span><i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="col-xl-7">
            <div className="row gy-4 icon-boxes">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <i className="bi bi-person"></i>
                  <h3>Assistance Personnalisée</h3>
                  <p>Nous offrons des conseils sur mesure pour améliorer votre profil professionnel et vous préparer aux entretiens.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <i className="bi bi-robot"></i>
                  <h3>Technologie Avancée</h3>
                  <p>Nous utilisons des outils d'intelligence artificielle de pointe pour analyser et optimiser votre CV et vos candidatures.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="icon-box">
                  <i className="bi bi-briefcase"></i>
                  <h3>Opportunités de Carrière</h3>
                  <p>Nous vous connectons avec des opportunités de carrière qui correspondent à vos compétences et aspirations.</p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <i className="bi bi-bar-chart"></i>
                  <h3>Analyse et Conseils</h3>
                  <p>Nous analysons les tendances du marché du travail et vous fournissons des conseils pour maximiser vos chances de succès.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
