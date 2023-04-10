import React from 'react';
import beta from '../assets/All Images/beta.png'
const Banner = () => {
  return (
    <div className="banner container-fluid p-0">
      <img src={beta} className="img-fluid" alt="beta" />
      <div className="banner-text d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="mb-3">Welcome to Our Website!</h1>
          <p className="lead mb-5">Discover amazing products and services that we offer.</p>
          <button className="btn btn-primary btn-lg">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

