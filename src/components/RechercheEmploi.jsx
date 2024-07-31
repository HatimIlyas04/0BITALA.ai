import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

// Styled component for the main wrapper
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  background-color: #f8f9fa; /* Light background for readability */
`;

// Styled component for the job cards
const JobCard = styled(Card)`
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
  transition: box-shadow 0.3s ease-in-out;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100%; /* Make all cards the same height */
  overflow: hidden;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
  }
`;

// Styled component for the card header
const CardHeader = styled(Card.Header)`
  background-color: #343a40;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  padding: 0.75rem;
`;

// Styled component for the card footer
const CardFooter = styled(Card.Footer)`
  background-color: #f1f1f1;
  text-align: center;
  padding: 0.5rem;
  border-top: 1px solid #dee2e6;
`;

// Styled component for the job description
const JobDescription = styled(Card.Text)`
  font-size: 0.875rem;
  color: #212529;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* Limit to 6 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Styled component for the Apply Now button
const ApplyButton = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled component for form spacing
const FormGroup = styled(Form.Group)`
  margin-bottom: 1.5rem; /* Add spacing between form elements */
`;

// Styled component for the form card
const FormCard = styled(Card)`
  margin-top: 4rem; /* Add more margin at the top of the card */
  margin-bottom: 4rem; /* Add more margin at the bottom of the card */
  padding: 1.5rem;
`;

// CORS proxy URL
const corsProxy = 'https://api.allorigins.win/get?url=';
const apiKey = 'd5dfa2679b815e93b168faa5d8d8d4cac1f8c4fb71ba046f72291daa3c8d67c1';

// Function to fetch jobs
const fetchJobs = async (skills, location, jobType) => {
  try {
    const response = await fetch(`${corsProxy}${encodeURIComponent(`https://serpapi.com/search?engine=google_jobs&q=${encodeURIComponent(skills)}&location=${encodeURIComponent(location)}&job_type=${encodeURIComponent(jobType)}&api_key=${apiKey}`)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.contents ? JSON.parse(data.contents).jobs_results || [] : [];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return []; // Ensure this is always an array
  }
};

// Main component
const RechercheEmploi = () => {
  const [skills, setSkills] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [jobs, setJobs] = useState([]);

  // Handle search form submission
  const handleSearch = async (event) => {
    event.preventDefault();
    const jobData = await fetchJobs(skills, location, jobType);
    setJobs(jobData);
  };

  return (
    <Wrapper>
      <Container>
        <h1 className="mb-4 text-center">Recherche d'Emploi Assistée par IA</h1>
        <FormCard>
          <Card.Header>
            <h2>Formulaire de Recherche</h2>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSearch}>
              <FormGroup controlId="formSkills">
                <Form.Label>Compétences :</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="e.g., JavaScript, React, Node.js" 
                  value={skills} 
                  onChange={(e) => setSkills(e.target.value)} 
                />
              </FormGroup>
              <FormGroup controlId="formLocation">
                <Form.Label>Localisation :</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="e.g., Paris, New York" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                />
              </FormGroup>
              <FormGroup controlId="formJobType">
                <Form.Label>Type de poste :</Form.Label>
                <Form.Control 
                  as="select" 
                  value={jobType} 
                  onChange={(e) => setJobType(e.target.value)}
                >
                  <option value="">Choisir un type</option>
                  <option value="full-time">Temps plein</option>
                  <option value="part-time">Temps partiel</option>
                  <option value="contract">Contrat</option>
                  <option value="internship">Stage</option>
                </Form.Control>
              </FormGroup>
              <FormGroup controlId="formExperienceLevel">
                <Form.Label>Niveau d'expérience :</Form.Label>
                <Form.Control 
                  as="select" 
                  value={experienceLevel} 
                  onChange={(e) => setExperienceLevel(e.target.value)}
                >
                  <option value="">Choisir un niveau</option>
                  <option value="entry-level">Débutant</option>
                  <option value="mid-level">Intermédiaire</option>
                  <option value="senior">Senior</option>
                </Form.Control>
              </FormGroup>
              <FormGroup controlId="formSalaryRange">
                <Form.Label>Plage de salaire :</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="e.g., 30000-50000" 
                  value={salaryRange} 
                  onChange={(e) => setSalaryRange(e.target.value)} 
                />
              </FormGroup>
              <Button variant="primary" type="submit">
                Rechercher des emplois
              </Button>
            </Form>
          </Card.Body>
        </FormCard>
        <Row>
          {Array.isArray(jobs) && jobs.map((job) => (
            <Col md={4} key={job.job_id} className="mb-4">
              <JobCard>
                <CardHeader>
                  {job.title}
                </CardHeader>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted text-center">
                    {job.company} - {job.location}
                  </Card.Subtitle>
                  <JobDescription>{job.description}</JobDescription>
                </Card.Body>
                <CardFooter>
                  <ApplyButton href={job.apply_url} target="_blank" rel="noopener noreferrer">
                    Postuler maintenant
                  </ApplyButton>
                </CardFooter>
              </JobCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default RechercheEmploi;
