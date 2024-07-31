import React from 'react';
// import './CallToActionSection.css'; // Importez votre CSS ici

const CallToActionSection = () => {
  return (
    <section id="call-to-action" className="call-to-action section dark-background">
      <img src="assets/img/cta-bg.jpg" alt="Image de fond" />
      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Rejoignez 0BITALA</h3>
              <p>
                Vous êtes prêt à transformer votre carrière avec l'aide de l'intelligence artificielle ? <strong>0BITALA</strong> est là pour vous guider à chaque étape de votre parcours professionnel. Profitez de notre expertise pour améliorer votre CV, préparer vos entretiens et découvrir les meilleures opportunités de carrière.
              </p>
              <a className="cta-btn" href="#">Découvrez comment</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
