

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../assets/img/logo0BITALA.png'; // Import your logo image
import styled from 'styled-components';

const StyledNav = styled.nav`
   text-decoration: none; /* Remove underline from logo */

`;


const StyledLink = styled(Link)`
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
          <img
            src={logo}
            alt="0BITALA Logo"
            className="logo-img"
          />
          </StyledLink>
          <StyledNav id="navmenu" className="navmenu">
            <ul >
              <li><Link style={{textDecorationLine:'none'}} href="/" className="active">Home</Link></li>
              <li><Link style={{textDecorationLine:'none'}} href="#about">About Us</Link></li>
              <li><Link style={{textDecorationLine:'none'}} href="#services">Our Services</Link></li>
              <li><Link style={{textDecorationLine:'none'}} href="#team">Team</Link></li>
              <li><Link style={{textDecorationLine:'none'}} href="#contact">Contact Us</Link></li>
              <li className="dropdown">
                <a style={{textDecorationLine:'none'}} href="#"><span >More</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul className="dropdown-menu">
                  <li><a style={{textDecorationLine:'none'}} href="#faq">FAQ</a></li>
                  <li><a style={{textDecorationLine:'none'}} href="#blog">Blog</a></li>
                  <li><a style={{textDecorationLine:'none'}} href="#resources">Resources</a></li>
                </ul>
              </li>
            </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </StyledNav>
          <StyledLink style={{textDecorationLine:'none'}} className="btn-getstarted" to="#contact">
            Get In Touch
          </StyledLink>
      </div>
    </header>
  );
};

export default Header;

