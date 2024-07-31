// src/components/ServiceItem.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ServiceItemDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--surface-color);
  padding: 20px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);

  .icon {
    font-size: 24px;
    margin-right: 20px;
    color: var(--accent-color);
  }

  .title {
    font-size: 20px;
    font-weight: 700;

    a {
      color: var(--default-color);
      text-decoration: none;

      &:hover {
        color: var(--accent-color);
      }
    }
  }

  .description {
    font-size: 15px;
  }
`;

const ServiceItem = ({ icon, title, description, link, delay }) => (
  <div className="col-lg-6" data-aos="fade-up" data-aos-delay={delay}>
    <ServiceItemDiv className="service-item d-flex">
      <div className="icon flex-shrink-0"><i className={`bi ${icon}`}></i></div>
      <div>
        <h4 className="title"><Link to={link} className="stretched-link">{title}</Link></h4>
        <p className="description">{description}</p>
      </div>
    </ServiceItemDiv>
  </div>
);

export default ServiceItem;
