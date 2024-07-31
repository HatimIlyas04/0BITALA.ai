import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styled from 'styled-components';
import logo from '../assets/img/logo.png'; // Update or use a new logo if needed

// Styled component for the navigation menu
const StyledNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  li {
    position: relative;
    margin-right: 1rem;
  }

  a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Ensure text color matches the design */
    padding: 0.5rem 1rem; /* Add padding for better spacing */
    display: block;

    &:hover, &:focus {
      color: #007bff; /* Optional: Add hover color */
    }
  }

  .dropdown {
    position: relative;

    .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #ffffff;
      border: 1px solid #dee2e6;
      box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.075);
      padding: 0.5rem 0;
      list-style: none;
      margin: 0;
    }

    &:hover .dropdown-menu {
      display: block;
    }
  }

  .mobile-nav-toggle {
    display: none; /* Adjust display based on screen size */
  }
`;

// Styled component for the logo and button
const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline from logo */
  color: inherit; /* Ensure text color matches the design */
  font-weight: bold; /* Optional: Make logo text bold */

  &:hover, &:focus {
    text-decoration: none; /* Ensure underline is removed on hover/focus */
  }
`;

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
        <StyledLink to="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">0BITALA</h1><span>.</span>
        </StyledLink>
        <StyledNav id="navmenu" className="navmenu">
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li className="dropdown">
              <a href="#"><span>More</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul className="dropdown-menu">
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#resources">Resources</a></li>
              </ul>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </StyledNav>
        <StyledLink className="btn-getstarted" to="#contact">
          Get In Touch
        </StyledLink>
      </div>
    </header>
  );
};

export default Header;
