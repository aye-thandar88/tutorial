import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import {
  Link,
} from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <h1 className="app_nvabar-logo">Destiny</h1>
      <ul className="app__navbar-links">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#awards">Awards</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        {/* <a href="#login">Log In</a> */}
        <Link to={`login`}>Log In</Link>
        <div />
        <a href="#bookTable">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen width-10">
        <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <MdOutlineRestaurantMenu
              className="overlay-top"
              fontSize={37}
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#awards">Awards</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
