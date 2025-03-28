import React from 'react'
import { Button } from "@mui/material";
import bgImg from '../../assets/images/gate_compressed.png'
import './admin.css'
import { useState } from 'react';


const Admin = () => {
  // set active Tab
  const [activeTab,setactiveTab]=useState(null);
  const handleSelection=(tab)=>{
    setactiveTab(tab);
  }

  return (
    <>
    <div className="admin-container">
      <div className="bgImg">
        <img src={bgImg} alt="" />
      </div>
      <div className="header">
        <h2>Admin Portal<hr style={{border: '2px solid white',position:'relative',margin:'auto', width: '50%',marginTop:'5px',opacity: 1}}/></h2>
        
      </div>
    </div>
    <div className="navbar-container">
      <div className="nav-links">
        <div to="/"  className={`nav-btn ${activeTab==="service"?'active':''} `}>
          Dashboard
        </div>
        <Button onClick={() => handleSelection("mailingService")} className={`nav-btn ${activeTab === "mailingService" ? "active" : ""}`}>
          Mailing Service
        </Button>
        <Button  className="nav-btn" >
          Registrations
        </Button>
        <Button className="nav-btn" >
          Database
        </Button>
        <Button  className="nav-btn active" >
          Create an event
        </Button>
      </div>
    </div>
    </>
  )
}

export default Admin