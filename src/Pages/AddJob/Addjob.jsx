import React, { useState } from "react";
import "./addjob.css";

export default function Addjob() {
  const [formData, setFormData] = useState({
    type: "",
    role:"",
    company:"",
    location:"",
    link:"",
    description: "",
    stipend:"",
    tenure:"",
    experience:"",
    startDate: "",
    endDate: "",
    
   
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="job-container">
      <form onSubmit={handleSubmit} className="addjob">
        <h1 className="job-heading">POST A NEW OPPORTUNITY</h1>
        <div className="job-Info">
            <div>
        <label>
          Type <span className="job-required">*</span>
        </label>
        <input type="text" name="type" required onChange={handleChange} />
        </div>
        <div>
        <label>
          Role <span className="job-required">*</span>
        </label>
        <input type="text" name="role" required onChange={handleChange} />
        </div>
        <div>
        <label>
        Company <span className="job-required">*</span>
        </label>
        <input type="text" name="company" required onChange={handleChange} />
        </div>
        <div>
        <label>
          Location <span className="job-required">*</span>
        </label>
        <input type="text" name="location" required onChange={handleChange} />
        </div>
        </div>

         <label>
          Link To Apply <span className="job-required">*</span>
        </label>
        <input type="text" name="link" required onChange={handleChange} />




        <label>
          Description <span className="job-required">*</span>
        </label>
        <textarea
          className="job-description"
          name="description"
          required
          onChange={handleChange}
        />

        <div className="job-details">
        <div>
        <label>
          Stipend<span className="job-time">(Per months)</span><span className="job-required">*</span>
        </label>
        <input type="text" name="stipend" required onChange={handleChange} />
        </div>
        <div>
        <label>Tenure<span className="job-time">(In Months)</span><span className="job-required">*</span></label>
        <input type="text" name="tenure" required onChange={handleChange} />
        </div>
        <div>
        <label>Min.Experience<span className="job-time">(In Years)</span> <span className="job-required">*</span></label>
        <input type="text" name="experience" required onChange={handleChange} />
        </div>
        </div>

        
        <div className="job-date-container">
          <div>
            <label>
              Last Date to Apply <span className="job-required">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              Joining Date <span className="job-required">*</span>
            </label>
            <input
              type="date"
              name="endDate"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="job-button-container">
          <button className="job-submit" type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
