import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="logo">
        <img src="./images/PureCycle.svg" alt="" />
      </div>
      <div className="nav_icon">
        <i class="fa-regular fa-bars"></i>
        <p>Menu</p>
      </div>
    </div>
  );
};

export default Navbar;
