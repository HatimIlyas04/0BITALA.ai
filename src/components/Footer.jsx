// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

// Styled component for the footer container
const FooterWrapper = styled.footer`
  background-color: #343a40; /* Dark background */
  color: #ffffff; /* White text color */
  padding: 1.5rem 0;
  width: 100%; /* Full width */
  font-family: 'Roboto', sans-serif; /* Font family */
  text-align: center;
`;

// Styled component for the copyright text
const Copyright = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;

  strong {
    color: #007bff; /* Blue color for the brand name */
  }
`;

// Styled component for the credits section
const Credits = styled.div`
  font-size: 0.75rem;
  color: #adb5bd; /* Light grey color */
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>
        &copy; Copyright <strong><span>0BITALA</span></strong>. All Rights Reserved
      </Copyright>
      <Credits>
        {/* Add credits here if needed */}
      </Credits>
    </FooterWrapper>
  );
};

export default Footer;
