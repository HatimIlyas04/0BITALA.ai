import React, { useState } from 'react';
import heroBg from '../assets/img/hero-bg.jpg'; 
import styled from 'styled-components'; 
import Swal from 'sweetalert2'; // استيراد مكتبة SweetAlert2

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // منع الإرسال التلقائي للفورم
    setLoading(true); // بدء التحميل
    setMessage(''); // مسح الرسائل السابقة
    setError(''); // مسح رسائل الخطأ

    const email = e.target.email.value;

    try {
      const response = await fetch('https://formspree.io/f/xjvngwvj', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), 
      });

      if (response.ok) {
        setMessage('Votre demande d\'abonnement a été envoyée. Merci !');
        
        // Show SweetAlert2 success message
        Swal.fire({
          title: 'Succès!',
          text: 'Votre abonnement a été confirmé!',
          icon: 'success',
          confirmButtonText: 'OK'
        });

      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="Hero Background" data-aos="fade-in" />
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <Title data-aos="fade-up" data-aos-delay="100">Bienvenue sur <StyledWord>0BITALA</StyledWord></Title>
            <Description data-aos="fade-up" data-aos-delay="200">Nous utilisons l'IA pour vous aider à trouver un emploi, améliorer votre CV et vous préparer pour les entretiens.</Description>
          </div>
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="sign-up-form">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Entrez votre e-mail" 
                  required
                />
                <input 
                  type="submit" 
                  value="S'abonner" 
                  disabled={loading}
                />
              </div>
              {loading && <div className="loading">Chargement</div>}
              {error && <div className="error-message">{error}</div>}
              {message && <div className="sent-message">{message}</div>}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

// Styled-components
const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 60px 0;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: #ccc;
`;

const StyledWord = styled.span`
  font-family: 'Your Custom Font', sans-serif; // Replace with your font family
  font-size: 3rem; // Increased size for emphasis
  font-weight: 900; // Heavier weight for impact
  background: linear-gradient(90deg, #ff6f61, #debb7d); // Gradient color
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
`;

export default Hero;
