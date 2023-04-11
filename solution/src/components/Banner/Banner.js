import React from 'react';
import beta from '../assets/All Images/beta.png'
const Banner = () => {
  return (
    <div className="banner container-fluid p-0 d-flex m-5">
      
      <div className="banner-text mb-5 ">
        <div className="text-center">
          <h1 className="mb-3">One Step Closer To Your </h1>
          <div className="text-info"><h1>Dream jobs</h1></div>
          <p className="lead mb-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="btn btn-primary btn-lg">Get started</button>
        </div>
      </div>
      <img src={beta} className="img-fluid" alt="beta" />
    </div>
  );
};

export default Banner;

