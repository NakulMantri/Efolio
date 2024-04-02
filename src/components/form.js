import React, { useState } from 'react';
import axios from 'axios';
import ExperienceList from "./ExperienceList"

const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'];

const ExperienceForm = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    title: '',
    employmentType: '',
    companyName: '',
    location: '',
    locationType: '',
    stillWorking: false,
    durationYears: '',
    durationMonths: '',
    description: ''
  });

  // Handler function to update form data as user types
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handler function to submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data to the console
    console.log('Submitting experience form:', formData);
    // Send form data to backend
    axios.post('http://localhost:5000/experiences', formData)
      .then(response => {
        console.log('Experience form submitted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error submitting experience form:', error);
      });
  };

  return (
    <div>
      <h2>Experience Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="employmentType">Employment Type:</label>
          <select
            id="employmentType"
            name="employmentType"
            value={formData.employmentType}
            onChange={handleChange}
            required
          >
            <option value="">Select Employment Type</option>
            {employmentTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location Type:</label>
          <div>
            <label>
              <input
                type="radio"
                name="locationType"
                value="Remote"
                checked={formData.locationType === 'Remote'}
                onChange={handleChange}
              />
              Remote
            </label>
            <label>
              <input
                type="radio"
                name="locationType"
                value="Onsite"
                checked={formData.locationType === 'Onsite'}
                onChange={handleChange}
              />
              Onsite
            </label>
          </div>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="stillWorking"
              checked={formData.stillWorking}
              onChange={handleChange}
            />
            Still Working
          </label>
        </div>
        {!formData.stillWorking && (
          <div>
            <label htmlFor="durationYears">Duration (Years):</label>
            <input
              type="number"
              id="durationYears"
              name="durationYears"
              value={formData.durationYears}
              onChange={handleChange}
              required
            />
            <label htmlFor="durationMonths">Duration (Months):</label>
            <input
              type="number"
              id="durationMonths"
              name="durationMonths"
              value={formData.durationMonths}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ExperienceList/>
    </div>
  );
};

export default ExperienceForm;
