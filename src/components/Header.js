/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <div class="top-nav">
        <div class="contacts">
          <span class="pads">
            <i class="zmdi zmdi-phone"></i>
            +977-986-068-9987 &#32;
          </span>
          <span class="pads">
            <i class="zmdi zmdi-email"></i>
            mail@elscript.com
          </span>
        </div>
        <div class="socials">
          <span>
            <i class="zmdi zmdi-facebook pads"></i>
            <i class="zmdi zmdi-whatsapp pads"></i>
          </span>
        </div>
      </div>

      <div class="bottom-nav">
        <div class="left-item">
          <img src={require("../images/logo.png")} alt="" />
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div class="right-item">
          <div class="account-dropdown">
            <div class="account">
              <i class="zmdi zmdi-account-circle"></i>
            </div>
            <div class="account-dropdowns-content">
              <Link to="login">Login</Link>
              <hr />
              <Link to="registeration">Register</Link>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-nav-mobile">
        <div className="top-item">
          <div class="left-item-mobile">
            <img src={require("../images/logo.png")} alt="" />
          </div>
          <div class="right-item-mobile">
            <div class="account-dropdown">
              <div class="account">
                <i class="zmdi zmdi-account-circle"></i>
              </div>
              <div class="account-dropdowns-content">
                <Link to="login">Login</Link>
                <hr />
                <Link to="registeration">Register</Link>
              </div>
            </div>
            <i class="zmdi zmdi-menu" onClick={() => setShowNav(!showNav)}></i>
          </div>
        </div>

        <div className={showNav ? `nav-items-mobile` : `hide-nav`}>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
