import React from 'react'
import'./footer.css'
import Logo from '../../assets/images/Logo.svg'
import MapImg from '../../assets/images/map.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row px-2 footerWrapper d-flex justify-content-center">

        <div className="col-3 d-flex flex-column justify-content-center align-items-center part1">
          <div className="footer-logo"><img src={Logo} alt="" /></div>
          <div className="clgName">
            <h3>Padmabhooshan Vasantdada Patil Institute of Technology</h3>
          </div>
        </div>

        <div className="col-3 part2 ">
          <div className="heading">
            <h2 className='px-2'>Address</h2>
            <hr style={{ border: "2px solid white", width: "100%" ,opacity:1,margin:'0',marginBottom:'5px'}} />
            <p className='py-2'>S No 33/22, Pune Pirangut Road, next to Chandani Chowk, Bavdhan, Pune, Maharashtra 411021.</p>
            <img className='py-2 px-2 mapImg' src={MapImg} alt="" /> 
            <p className='pt-2 text-center'>Get Directions</p>        
          </div>
        </div>

        <div className="col-3 part3 ">
          <div className="heading">
              <h2 className='px-2'>Connect with Us</h2>
              <hr style={{ border: "2px solid white", width: "100%" ,opacity:1,margin:'0',marginBottom:'5px'}} />
              <p><Link to='' ><span className='icon d-flex align-items-center'><InstagramIcon/>PVPIT Bavdhan</span></Link></p>
              <p><Link to='' ><span className='icon d-flex align-items-center'><FacebookIcon/>PVPIT Bavdhan</span></Link></p>
              <p><Link to='' ><span className='icon d-flex align-items-center'><LinkedInIcon/>Placement Cell</span></Link></p>
          </div>
        </div>

        <div className="col-3 part4 ">
          <div className="heading">
              <h2 className='px-2'>Contact Us</h2>
              <hr style={{ border: "2px solid white", width: "100%" ,opacity:1,margin:'0',marginBottom:'5px'}} />
              <p className='py-2'>Prof. Ganesh Wayal
                <br />Head Of Dept. (Computer Dept.)
                <br/><p><Link to='' ><span className='icon d-flex align-items-center'><CallOutlinedIcon/>+91 8275047372 (Phone)</span></Link></p> 
                Mr. Akash Shrivastava
                <br />
                TPO, In-charge, Alumni Cell
                <br />
                <p><Link to='' ><span className='icon d-flex align-items-center'><CallOutlinedIcon/>+91 9303683660 (Phone)</span></Link></p> </p>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer