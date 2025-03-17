import React from 'react'
import { Link } from 'react-router-dom';
import './mainPagesNavbar.css'
import { useState } from 'react';
import Logo from '../../assets/images/Logo.svg'
import { useEffect } from 'react';
import { useRef } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const MainPagesNavbar = () => {

  // Navbar active tab
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  // GET WINDOW SIZE FOR RESPONSIVENESS
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      
      // Remove the event listener on component unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
      }, []);

       // Responsive Open menu
    const [isOpenMenu,setisOpenMenu]=useState(false);
    const openMenu=()=>{
        setisOpenMenu(true);
    }

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            // Click occurred outside of the menu, trigger close menu function
            closeMenu();
            
        }
        };
       

        document.addEventListener('touchstart', handleClickOutside);
        
        return () => {
        document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const closeMenu=()=>{
        setisOpenMenu(false);
        
    }


  return (
    <header>
      { windowWidth <= 778 && 
        <div className = " p-2 px-4 d-flex flex-row m-0">
          <div className = " d-flex justify-content-flex-start align-items-center part1 m-auto">
            <Link to='/' className=' d-flex justify-content-flex-start align-items-center'><img className="nav-logo" alt="" src={Logo}/>PVPIT CONNECT</Link>
          </div>
          <div className=" d-flex align-items-center justify-content-center part2 m-auto">
            <div className="signinBtn  ">Sign In</div>

            <span><div className=' navbarToggle' onClick={openMenu}><MenuRoundedIcon/></div></span>
            {/* <ul className="d-flex justify-content-center align-items-center">
              <li className=""><Link to ="/" >Home</Link></li>
              <li className=""><Link to ="yearbook" >Community</Link></li>
              <li className=""><Link to ="" >Events</Link></li>
              <li className=""><Link to ="about" className={`${activeLink === 'about' ? 'active':''}`} onClick={()=>{handleLinkClick('about')}}>About</Link></li>
              <li className=""><Link to ="services" className={`${activeLink === 'services' ? 'active':''}`} onClick={()=>{handleLinkClick('services')}}>Login</Link></li>
              <li className=""><Link to ="contact" className={`highlight ${activeLink === 'contact' ? 'active':''}`} onClick={()=>{handleLinkClick('contact')}}> Register </Link></li>
            </ul> */}
          </div>
      
      </div>
}

{windowWidth > 778 && 
      <div className = "row p-2 m-0">
        <div className = "col-5 d-flex justify-content-center align-items-center part1 m-auto">
          <Link to='/' className=' d-flex justify-content-center align-items-center'><img className="nav-logo" alt="" src={Logo}/>PVPIT CONNECT</Link>
        </div>
        <div className="col-7 d-flex align-items-center part2 m-auto">
          <ul className="d-flex justify-content-center align-items-center">
            {/* <li className=""><Link to ="/"   className={`${activeLink === 'home' ? 'active' : ''}`} onClick={() => handleLinkClick('home')} aria-current="home">Home</Link></li> */}
            <li className=""><Link to ="yearbook" >Community</Link></li>
            <li className=""><Link to ="" >Events</Link></li>
            <li className=""><Link to ="about" className={`${activeLink === 'about' ? 'active':''}`} onClick={()=>{handleLinkClick('about')}}>About</Link></li>
            <li className=""><Link to ="services" className={`${activeLink === 'services' ? 'active':''}`} onClick={()=>{handleLinkClick('services')}}>Login</Link></li>
            <li className=""><Link to ="contact" className={`highlight ${activeLink === 'contact' ? 'active':''}`} onClick={()=>{handleLinkClick('contact')}}> Register </Link></li>
          </ul>
        </div>
        {/* <div className="col-1"></div> */}
      
      </div>
}
    </header>
  )
}

export default MainPagesNavbar