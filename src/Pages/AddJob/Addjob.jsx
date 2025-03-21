import React, { useState } from "react";
import "./Addjob.css";

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
    <div className="form-container">
      <form onSubmit={handleSubmit} className="addjob">
        <h1 className="heading">POST A NEW OPPORTUNITY</h1>
        <div className="Info">
            <div>
        <label>
          Type <span>*</span>
        </label>
        <input type="text" name="type" required onChange={handleChange} />
        </div>
        <div>
        <label>
          Role <span>*</span>
        </label>
        <input type="text" name="role" required onChange={handleChange} />
        </div>
        <div>
        <label>
        Company <span>*</span>
        </label>
        <input type="text" name="company" required onChange={handleChange} />
        </div>
        <div>
        <label>
          Location <span>*</span>
        </label>
        <input type="text" name="location" required onChange={handleChange} />
        </div>
        </div>

         <label>
          Link To Apply <span>*</span>
        </label>
        <input type="text" name="link" required onChange={handleChange} />




        <label>
          Description <span>*</span>
        </label>
        <textarea
          className="description"
          name="description"
          required
          onChange={handleChange}
        />

        <div className="payment">
            <div>
        <label>
          Stipend<span className="time">(Per months)</span><span>*</span>
        </label>
        <input type="text" name="stipend" required onChange={handleChange} />
        </div>
        <div>
        <label>Tenure<span className="time">(In Months)</span><span>*</span></label>
        <input type="text" name="tenure" required onChange={handleChange} />
        </div>
        <div>
        <label>Min.Experience<span className="time">(In Years)</span> <span>*</span></label>
        <input type="text" name="experience" required onChange={handleChange} />
        </div>
        </div>

        
        <div className="date-container">
          <div>
            <label>
              Last Date to Apply <span>*</span>
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
              Joining Date <span>*</span>
            </label>
            <input
              type="date"
              name="endDate"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="button-container">
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
