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
    <section className="category-list ">
      <h2 className="d-flex justify-content-center">Featured Jobs</h2>
      <p className="d-flex justify-content-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="category-cards d-flex row">
        {jobs.map(job => (
          <div key={job.id} className="category-card  col-12 border border-light w-25  h-50  d-block "> 
            <img src={job.logo} alt={`${job.logo} logo`} />
            <h3>{job.title}</h3>
            <div className="d-flex gap-5 col-2">
            <button  className="btn btn-primary ">Remote</button>
            <button  className="btn btn-primary ">Fulltime</button>
            </div>
            <div className="d-flex gap-5"> <img src="../assets/Icons/Location Icon.png" alt="" /> <p> {job.location}</p>
           <img src="../assets/Icons/Frame.png" alt="" /> <p>{job.salary}</p></div>
           
            
            <button className="btn btn-primary ">view details</button>
      
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Jobs;
