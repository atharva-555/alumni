import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./login.css";


export default function Signup() {

  // AUTHENTICATION,LOGIN,SETTING USER CONTEXT
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [role, setRole] = useState("student"); // Default to student

  const handleLogin = (formData) => {
    const userData = {
      formData,
      role: role, // role can be 'admin', 'student', or 'guest'
    };

    // Simulate login with user data
    login(userData);
    navigate("/"); // Redirect to homepage after login
  };


  // 

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
    handleLogin(formData);
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">Sign in</h2>
      <div className="signin-box">
        <form onSubmit={handleSubmit}>
          <label className="signin-label">Email <span className="signin-required">*</span></label>
          <input 
            type="email" 
            className="signin-input"
            name="email" 
            placeholder="Enter your email" 
            required
            onChange={handleChange} 
          />
         

          <label className="signin-label">Roll no. <span className="signin-required">*</span></label>
          <input 
            type="text" 
             className="signin-input"
            name="rollNo" 
            placeholder="Enter your roll number" 
            required
            onChange={handleChange} 
          />
          
          <label className="signin-label">Password <span className="signin-required">*</span></label>
          <input 
            type="password"
            className="signin-input" 
            name="password" 
            placeholder="Enter your password" 
            required
            onChange={handleChange} 
          />
          

          <a href="#" className="forgot-password">Forgot password?</a>

          <button type="submit" className="signin-btn">SIGN IN</button>
        </form>
      </div>

      <div className="signin-register-box">
        <p>Don’t have an account?</p>
        <button className="register-btn" onClick={() => navigate("/register")}>
          REGISTER HERE
        </button>
      </div>
    </div>
  );
}
