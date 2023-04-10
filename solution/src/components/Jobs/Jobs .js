import React, { useState, useEffect } from "react";


function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("Job.json")
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="category-list">
      <h2>Categories</h2>
      <div className="category-cards">
        {jobs.map(job => (
          <div key={job.id} className="category-card">
            <img src={job.logo} alt={`${job.logo} logo`} />
            <h3>{job.title}</h3>
            <p>Jobs Available: {job.experience}</p>
            
            <button>View Details</button>
      
          </div>
        ))}
      </div>
    </section>
  );
}

export default Jobs;
