// FeatureItem.jsx
import React from 'react';

const FeatureItem = ({ title, description, image, orderClass, delay }) => (
  <div className={`row gy-4 align-items-center features-item ${orderClass}`}>
    <div className={`col-lg-5 ${orderClass}`} data-aos="fade-up" data-aos-delay={delay}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="btn btn-get-started">Get Started</a>
    </div>
    <div className="col-lg-7 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
      <div className="image-stack">
        <img src={image[0]} alt="" className="stack-front" />
        <img src={image[1]} alt="" className="stack-back" />
      </div>
    </div>
  </div>
);

export default FeatureItem;
