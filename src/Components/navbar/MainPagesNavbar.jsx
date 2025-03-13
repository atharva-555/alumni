import React from 'react'
import { Link } from 'react-router-dom';
import './mainPagesNavbar.css'
import { useState } from 'react';
import Logo from '../../assets/images/Logo.svg'

const MainPagesNavbar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <div className = "row p-2 m-0">
        <div className = "col-5 d-flex justify-content-center align-items-center part1 m-auto">
          <Link to='/'><img className="nav-logo" alt="" src={Logo}/>PVPIT CONNECT</Link>
        </div>
        <div className="col-7 d-flex align-items-center part2">
          <ul className="list list-inline mb-0">
            {/* <li className="list-inline-item"><Link to ="/"   className={`${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')} aria-current="home">Home</Link></li> */}
            <li className="list-inline-item"><Link to ="about" className={`${activeLink === 'about' ? 'active':''}`} onClick={()=>{handleLinkClick('about')}}>Community</Link></li>
            <li className="list-inline-item"><Link to ="about" className={`${activeLink === 'about' ? 'active':''}`} onClick={()=>{handleLinkClick('about')}}>Events</Link></li>
            <li className="list-inline-item"><Link to ="about" className={`${activeLink === 'about' ? 'active':''}`} onClick={()=>{handleLinkClick('about')}}>About</Link></li>
            <li className="list-inline-item"><Link to ="services" className={`${activeLink === 'services' ? 'active':''}`} onClick={()=>{handleLinkClick('services')}}>Login</Link></li>
            <li className="list-inline-item"><Link to ="contact" className={`${activeLink === 'contact' ? 'active':''}`} onClick={()=>{handleLinkClick('contact')}}>Register</Link></li>
          </ul>
        </div>
      
      </div>
    </header>
  )
}

export default MainPagesNavbar