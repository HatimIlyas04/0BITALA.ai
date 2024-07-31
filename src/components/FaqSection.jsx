import React, { useState } from 'react';
// import './FaqSection.css'; // Import your CSS here

const faqData = [
  {
    question: "Comment fonctionne l'analyse de CV avec l'IA ?",
    answer: "Notre IA utilise des algorithmes avancés pour analyser les mots-clés, les compétences et les expériences sur votre CV afin de vous fournir des suggestions personnalisées pour l'améliorer et le rendre plus attrayant pour les recruteurs."
  },
  {
    question: "Comment l'IA peut-elle m'aider à préparer mes entretiens ?",
    answer: "Notre plateforme propose des simulations d'entretiens basées sur l'IA qui évaluent vos réponses et fournissent des feedbacks détaillés. Cela vous aide à améliorer vos compétences en communication et à mieux vous préparer pour les questions d'entretien."
  },
  {
    question: "Quels types d'offres d'emploi puis-je trouver avec l'aide de l'IA ?",
    answer: "L'IA analyse les offres d'emploi disponibles et les compare avec votre profil pour vous recommander les opportunités les plus adaptées à vos compétences et à vos aspirations professionnelles."
  },
  {
    question: "Que sont les prévisions de carrière basées sur l'IA ?",
    answer: "Les prévisions de carrière utilisent des données du marché du travail et des tendances pour vous aider à planifier votre parcours professionnel. L'IA vous fournit des recommandations sur les compétences à développer et les opportunités à explorer pour atteindre vos objectifs de carrière."
  },
  {
    question: "Comment puis-je m'abonner à un plan ?",
    answer: "Vous pouvez choisir un plan adapté à vos besoins sur notre page des tarifs. Cliquez sur 'S'abonner' pour commencer, et vous aurez accès aux fonctionnalités du plan choisi. Nous proposons plusieurs options pour répondre à différents niveaux de besoins."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="content px-xl-5">
              <h3><span>Questions Fréquemment </span><strong>Posées</strong></h3>
              <p>Découvrez les réponses aux questions les plus fréquentes sur notre plateforme basée sur l'IA, et comment elle peut vous aider dans votre recherche d'emploi et votre développement professionnel.</p>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-container">
              {faqData.map((item, index) => (
                <div key={index} className={`faq-item ${index === activeIndex ? 'faq-active' : ''}`}>
                  <h3 onClick={() => toggleFaq(index)}>
                    <span className="num">{index + 1}.</span> <span>{item.question}</span>
                    <i className={`faq-toggle bi bi-chevron-${index === activeIndex ? 'down' : 'right'}`}></i>
                  </h3>
                  <div className="faq-content" style={{ display: index === activeIndex ? 'block' : 'none' }}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
