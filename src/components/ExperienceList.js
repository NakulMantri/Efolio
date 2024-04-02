import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/experiences')
      .then(response => {
        setExperiences(response.data);
      })
      .catch(error => {
        console.error('Error fetching experiences:', error);
      });
  }, []);

  return (
    <div>
      <h2>Experiences</h2>
      {experiences.map(experience => (
        <div key={experience._id}>
          <h3>{experience.title}</h3>
          <p>Employment Type: {experience.employmentType}</p>
          <p>Company Name: {experience.companyName}</p>
          <p>Location: {experience.location}</p>
          <p>Location Type: {experience.locationType}</p>
          {experience.stillWorking ? (
            <p>Still Working</p>
          ) : (
            <p>Left: {experience.durationYears} years, {experience.durationMonths} months ago</p>
          )}
          <p>Description: {experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
