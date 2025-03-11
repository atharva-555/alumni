import React from 'react'
import { Link } from 'react-router-dom';
import './mainPagesNavbar.css'
import { useState } from 'react';

const MainPagesNavbar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <div className = "row px-4 m-0">
        <div className = "col-4 d-flex justify-content-center align-items-center part1">
          <Link to='/'><img className="logo" alt="" />LOGO</Link>
        </div>
        <div className="col-8 d-flex align-items-center part2">
          <ul className="list list-inline mb-0">
            <li className="list-inline-item"><Link to ="/"   className={`${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')} aria-current="home">Home</Link></li>
            <li className="list-inline-item"><Link to ="about" className={`${activeLink === 'about' ? 'active':''}`} onClick={()=>{handleLinkClick('about')}}>About Us</Link></li>
            <li className="list-inline-item"><Link to ="services" className={`${activeLink === 'services' ? 'active':''}`} onClick={()=>{handleLinkClick('services')}}>Services</Link></li>
            <li className="list-inline-item"><Link to ="contact" className={`${activeLink === 'contact' ? 'active':''}`} onClick={()=>{handleLinkClick('contact')}}>Contact</Link></li>
          </ul>
        </div>
      
      </div>
    </header>
  )
}

export default MainPagesNavbar