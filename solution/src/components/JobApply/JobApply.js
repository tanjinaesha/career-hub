import React from 'react';

const JobApply = () => {
  const appliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

  return (
    <div>
      <h2>Applied Jobs</h2>
      {appliedJobs.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company Name</th>
              <th>Location</th>
              <th>Full-Time/Part-Time</th>
              <th>Salary</th>
              <th>Contact Information</th>
            </tr>
          </thead>
          <tbody>
            {appliedJobs.map(job => (
              <tr key={job.id}>
                <td>{job.jobTitle}</td>
                <td>{job.companyName}</td>
                <td>{job.location}</td>
                <td>{job.fullTimeOrPartTime}</td>
                <td>{job.salary}</td>
                <td>
                  Phone: {job.contactInformation.phone}<br />
                  Email: {job.contactInformation.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No applied jobs yet.</p>
      )}
    </div>
  );
};

export default JobApply;
