// PreparationEntretien.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import styled from 'styled-components';

// Styled components
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
`;

const ResultSection = styled.div`
  margin-top: 2rem;
`;

// Tailwind utility classes
const Title = styled.h2`
  @apply text-3xl font-bold text-gray-800 mb-4;
`;

const StyledButton = styled(Button)`
  @apply mt-4 bg-blue-500 text-white hover:bg-blue-600;
`;

const CardTitle = styled.h5`
  @apply text-lg font-semibold;
`;

const CardText = styled.p`
  @apply text-gray-700;
`;

const CardSubtitle = styled.h6`
  @apply text-sm text-gray-500;
`;

const PreparationEntretien = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!jobTitle) {
      setError('Veuillez entrer le titre du poste.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer YOUR_API_KEY_HERE`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: `Generate potential interview questions for the position of ${jobTitle}.`,
          max_tokens: 150,
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Error response:', errorDetails);
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      const questionsText = result.choices[0].text.trim();
      setQuestions(questionsText.split('\n').map((text, index) => ({
        text: text.trim(),
        answer: 'Sample answer' // You can generate or provide answers based on your needs
      })));
    } catch (error) {
      console.error('Error during interview preparation:', error);
      setError('Une erreur est survenue lors de la préparation de l\'entretien.');
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={8} className="mx-auto">
            <FormSection>
              <Title>Préparation aux Entretiens</Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formJobTitle">
                  <Form.Label>Titre du Poste</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez le titre du poste"
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                  />
                </Form.Group>
                <StyledButton
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Préparation en cours...' : 'Générer Entretien'}
                </StyledButton>
              </Form>
            </FormSection>

            {error && <Alert variant="danger">{error}</Alert>}
            {questions.length > 0 && (
              <ResultSection>
                <h3 className="text-2xl font-bold text-gray-800">Questions d'Entretien Générées</h3>
                {questions.map((question, index) => (
                  <Card key={index} className="mb-3 shadow-lg border rounded-lg">
                    <Card.Body>
                      <CardTitle>Question {index + 1}</CardTitle>
                      <CardText>{question.text}</CardText>
                      <CardSubtitle className="mb-2">Réponse suggérée :</CardSubtitle>
                      <CardText>{question.answer}</CardText>
                    </Card.Body>
                  </Card>
                ))}
              </ResultSection>
            )}
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default PreparationEntretien;
