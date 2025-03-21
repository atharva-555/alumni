import React, { useState } from "react";
import "./login.css";

export default function Signup() {

  const [formData, setFormData] = useState({
    email: "",
    rollNo: "",
    password: "",
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
    <div className="signin-container">
      <h2 className="signin-title">Sign in</h2>
      <div className="signin-box">
        <form onSubmit={handleSubmit}>
          <label>Email <span>*</span></label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter your email" 
            required
            onChange={handleChange} 
          />
         

          <label>Roll no. <span>*</span></label>
          <input 
            type="text" 
            name="rollNo" 
            placeholder="Enter your roll number" 
            required
            onChange={handleChange} 
          />
          
          <label>Password <span>*</span></label>
          <input 
            type="password" 
            name="password" 
            placeholder="Enter your password" 
            required
            onChange={handleChange} 
          />
          

          <a href="#" className="forgot-password">Forgot password?</a>

          <button type="submit" className="signin-btn">SIGN IN</button>
        </form>
      </div>

      <div className="register-box">
        <p>Don’t have an account?</p>
        <button className="register-btn" >
          REGISTER HERE
        </button>
      </div>
    </div>
  );
}
