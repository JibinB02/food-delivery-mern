import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";


const Navbar = () => {

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    window.location.replace("/");
  }

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <div className="profile-container">
        <img className="profile" src={assets.profile_image} alt="" />
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
