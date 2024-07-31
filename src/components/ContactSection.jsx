import React from 'react';
import styled from 'styled-components';

// Define styled components
const Section = styled.section`
  &.contact {
    padding: 60px 0;
    overflow: hidden;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  margin-bottom: 60px;
  text-align: center;

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 20px 0;
  }

  p {
    margin-bottom: 0;
    font-size: 16px;
    color: #6c757d;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColLg4 = styled.div`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  padding: 15px;
`;

const ColLg8 = styled.div`
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
  padding: 15px;
`;

const ContactInfo = styled.div`
  margin-bottom: 50px;

  .address, .email, .phone {
    margin-bottom: 20px;
  }

  h4 {
    font-size: 18px;
    margin: 10px 0 5px 0;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    margin-bottom: 0;
  }

  i {
    font-size: 20px;
    color: var(--accent-color);
  }
`;

const Form = styled.form`
  background: color-mix(in srgb, var(--default-color), transparent 96%);
  padding: 30px;
  height: 100%;

  .form-group {
    margin-bottom: 20px;
  }

  .form-control {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
    background-color: color-mix(in srgb, var(--background-color), transparent 50%);
    border-radius: 0;
    font-size: 14px;
    color: var(--default-color);
    box-shadow: none;
  }

  .form-control:focus {
    border-color: var(--accent-color);
  }

  .form-control::placeholder {
    color: color-mix(in srgb, var(--default-color), transparent 70%);
  }

  .loading {
    display: none;
    text-align: center;
    font-size: 14px;
    color: #666;
  }

  .error-message {
    display: none;
    color: #ff0000;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .sent-message {
    display: none;
    color: #18d26e;
    border: 1px solid #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  button[type="submit"] {
    background: var(--accent-color);
    color: var(--contrast-color);
    border: 0;
    padding: 10px 30px;
    transition: 0.4s;
    border-radius: 4px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background: color-mix(in srgb, var(--accent-color), transparent 20%);
  }
`;

const ContactSection = () => {
  return (
    <Section id="contact" className="contact section">
      <Container>
        <SectionTitle data-aos="fade-up">
          <h2>Contactez-nous</h2>
          <p>Nous sommes là pour vous aider à chaque étape de votre parcours professionnel.</p>
        </SectionTitle>
        <Row>
          <ColLg4 data-aos="fade-up" data-aos-delay="100">
            <ContactInfo className="contact-info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Adresse :</h4>
                <p>Hay el Mohamadi, Casablanca, Maroc</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email :</h4>
                <p>contact@0BITALA.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Téléphone :</h4>
                <p>+212 612 951 718</p>
              </div>
            </ContactInfo>
          </ColLg4>
          <ColLg8 data-aos="fade-up" data-aos-delay="200">
            <Form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Votre Nom" required />
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Votre Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" required />
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Chargement...</div>
                <div className="error-message">Une erreur est survenue. Veuillez réessayer.</div>
                <div className="sent-message">Votre message a été envoyé. Merci !</div>
              </div>
              <div className="text-center"><button type="submit">Envoyer le Message</button></div>
            </Form>
          </ColLg8>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactSection;
