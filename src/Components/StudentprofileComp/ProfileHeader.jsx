import React from "react";
import { LinkedIn, Facebook, Twitter } from "@mui/icons-material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import bgImg from '../../assets/images/gate_compressed.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import { useState } from "react";

const ProfileHeader = ({ user }) => {

  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };



  // console.log(user.profileImg)
  return (
    <div className="profile-header">
      <div className="bgImg">
        <img src={bgImg} alt="" />
      </div>
      <div className="profileInfoWrpper d-flex">
        <div className="profile-img">
          <img src={user.profileImg} alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.course}</p>

          <div className="social-links">
            <p className="w-auto " style={{ color: "grey"}}>
              <span className="icon"><LocationOnIcon/></span> {user.location}
            </p>

            <a href={user.linkedIn} target="_blank" rel="">
              <LinkedIn />LinkedIn
            </a>
            <a href={user.facebook} target="_blank" rel="">
              <Facebook />Facebook
            </a>
            <a href={user.twitter}  target="_blank" rel="">
              <Twitter />Twitter
            </a>
          </div>

        </div>


        <div className="options">
          <Button className="optionsIcon"  onClick={toggleDropdown}> <span className="circle-icon" ><MoreHorizRoundedIcon/></span></Button>
          <div className={`dropdown-menu-custom ${showDropdown ? "show" : ""}`}>
            <button onClick={() => alert("✏️ Edit Profile Clicked")}>
              ✏️ Edit Profile
            </button>
            <button onClick={() => alert("🔒 Change Password Clicked")}>
              🔒 Change Password
            </button>
          </div>
        </div>
        


      </div>
    </div>
  );
};

export default ProfileHeader;
