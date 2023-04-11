import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';



const Navbar = () => {
  return (
    
    <div>
    
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      
        <Link className="navbar-brand" to="/">
          Esolutions 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/statistics">
                Statistics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/applied-jobs">
                Applied Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary ms-auto">Start applying</button>
        </div>
      </div>
    </nav>
    <Home></Home>
    </div>
   
   
  );
};

export default Navbar;
