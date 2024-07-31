import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>eLEARNING</h2>
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="index.html" className="nav-item nav-link active">Home</a>
          <a href="about.html" className="nav-item nav-link">About</a>
          <a href="courses.html" className="nav-item nav-link">Courses</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu fade-down m-0">
              <a href="team.html" className="dropdown-item">Our Team</a>
              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">Contact</a>
        </div>
        <a href="#" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
