
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
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'text-davinci-003', // You can use a different model if preferred
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
              <h2>Préparation aux Entretiens</h2>
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
                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Préparation en cours...' : 'Générer Entretien'}
                </Button>
              </Form>
            </FormSection>

            {error && <Alert variant="danger">{error}</Alert>}
            {questions.length > 0 && (
              <ResultSection>
                <h3>Questions d'Entretien Générées</h3>
                {questions.map((question, index) => (
                  <Card key={index} className="mb-3">
                    <Card.Body>
                      <Card.Title>Question {index + 1}</Card.Title>
                      <Card.Text>{question.text}</Card.Text>
                      <Card.Subtitle className="mb-2 text-muted">Réponse suggérée :</Card.Subtitle>
                      <Card.Text>{question.answer}</Card.Text>
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
