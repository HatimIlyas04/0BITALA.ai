
import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

// Styled components
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const UploadSection = styled.div`
  margin-bottom: 2rem;
`;

const OptimizedCVSection = styled.div`
  margin-top: 2rem;
`;

// Function to call OpenAI API for CV optimization
const optimizeCV = async (cvText) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo', // Use the latest model
      messages: [
        {
          role: 'system',
          content: 'You are an expert at CV optimization. Optimize the following CV text to improve its content and presentation.',
        },
        {
          role: 'user',
          content: cvText,
        },
      ],
      max_tokens: 1500,
    }),
  });

  if (!response.ok) {
    const errorDetails = await response.json();
    console.error('Error response:', errorDetails);
    throw new Error('Network response was not ok');
  }

  const result = await response.json();
  return result.choices[0].message.content.trim(); // Extract optimized CV text
};

const OptimisationCV = () => {
  const [cvText, setCvText] = useState('');
  const [optimizedCV, setOptimizedCV] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTextChange = (event) => {
    setCvText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!cvText) {
      setError('Please enter your CV text.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const result = await optimizeCV(cvText);
      setOptimizedCV(result);
    } catch (error) {
      console.error('Error during CV optimization:', error);
      setError('An error occurred while optimizing your CV.');
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md={6} className="mx-auto">
            <UploadSection>
              <h2>Optimisation de CV avec IA</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCVText">
                  <Form.Label>Entrez le texte de votre CV :</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={cvText}
                    onChange={handleTextChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Optimizing...' : 'Optimiser le CV'}
                </Button>
              </Form>
            </UploadSection>

            {error && <Alert variant="danger">{error}</Alert>}
            {optimizedCV && (
              <OptimizedCVSection>
                <h3>CV Optimisé</h3>
                <p>{optimizedCV}</p>
              </OptimizedCVSection>
            )}
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default OptimisationCV;
