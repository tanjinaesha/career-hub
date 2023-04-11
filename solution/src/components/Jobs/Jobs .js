import React, { useState, useEffect } from "react";


function Jobs({ id }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("Job.json")
      .then(response => response.json())
      .then(data => setJobs(data))
      
      .catch(error => console.log(error));
  }, []);
  const handleSeeAllJobs = () => {
    fetch("Job.json")
      .then(response => response.json())
      .then(data => (data.slice(5,6)))
      
  };
  
  

  return (
    <section className="category-list ">
      <h2 className="d-flex justify-content-center">Featured Jobs</h2>
      <p className="d-flex justify-content-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="category-cards d-flex row m-5 mt-5  ">
        {jobs.slice(0, 4).map(job => (
          <div key={job.id} className="category-card  col-6 border border-light w-50  h-100  d-block "> 
            <img src={job.logo} alt={`${job.logo} logo`} />
            <h3>{job.title}</h3>
            <div className="d-flex gap-5 col-2 m-5 p-3">
            <button  className="btn btn-white border border-black ">Remote</button>
            <button  className="btn btn-white border border-black">Fulltime</button>
            </div>
            <div className="d-flex gap-2"> <img src="../assets/Icons/Location Icon.png" alt="" /> <p> {job.location}</p>
           <img src="../assets/Icons/Frame.png" alt="" /> <p>{job.salary}</p></div>
           
            
          
      
          </div>
        ))}
      </div>
      <br />
      <button onClick={ handleSeeAllJobs} className="btn btn-primary d-flex justify-content-center align-item-center text-align-center-center">Show all</button>
      
    </section>
  );
}

export default Jobs;
