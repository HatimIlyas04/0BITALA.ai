import React from 'react';
import meImg from '../assets/img/me.jpg';
import designerImg from '../assets/img/team-1.jpg';
import marketingImg from '../assets/img/team-4.jpg';
import managerImg from '../assets/img/team-4.jpg';

const teamMembers = [
  {
    name: "Hatim Ilyas",
    position: "Développeur",
    img: meImg,
    socialLinks: ["https://github.com/HatimIlyas04", "#", "#", "#"], // Update socialLinks if necessary
    description: "Développeur passionné avec une expertise en développement web et en technologies modernes."
  },
  {
    name: "Akouchi Akram",
    position: "Designer UI/UX",
    img: designerImg,
    socialLinks: ["#", "#", "#", "#"], // Update socialLinks if necessary
    description: "Designer créative spécialisée dans la création d'interfaces utilisateur intuitives et attrayantes."
  },
  {
    name: "Imane",
    position: "Responsable Marketing",
    img: marketingImg,
    socialLinks: ["#", "#", "#", "#"], // Update socialLinks if necessary
    description: "Expert en marketing numérique avec une expérience en stratégie de marque et gestion de campagnes publicitaires."
  },
  {
    name: "Chaimae",
    position: "Chef de Projet",
    img: managerImg,
    socialLinks: ["#", "#", "#", "#"], // Update socialLinks if necessary
    description: "Chef de projet organisé avec une expérience dans la gestion de projets complexes et l'optimisation des flux de travail."
  },
  // Add more members here
];

const TeamSection = () => {
  return (
    <section id="team" className="team section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Notre Équipe</h2>
        <p>Rencontrez les membres talentueux qui contribuent à faire avancer notre mission et à réaliser nos objectifs.</p>
      </div>
      <div className="container">
        <div className="row gy-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="member-img">
                <img src={member.img} className="img-fluid" alt={member.name} />
                <div className="social">
                  {member.socialLinks.map((link, i) => (
                    <a key={i} href={link}>
                      <i className={`bi bi-${i === 0 ? 'github' : i === 1 ? 'facebook' : i === 2 ? 'instagram' : 'linkedin'}`}></i>
                    </a>
                  ))}
                </div>
              </div>
              <div className="member-info text-center">
                <h4>{member.name}</h4>
                <span>{member.position}</span>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
