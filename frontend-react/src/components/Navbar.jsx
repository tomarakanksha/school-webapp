import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import myIcon from '../Assets/logo.png';

const Navbar = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);

  //Handle hamburger icon
  const handleIcon = () => {
    setIsIconClicked(!isIconClicked);
  };
  return (
    <>
      <nav className="NavbarItems">
        <Link className="navbar-logo" to="/"><img className = "logo" src={myIcon} alt="My Icon" />BrainTree Academy</Link>

        <div className="menu-icons" onClick={handleIcon}>
          {isIconClicked ? (
            <i className="bi bi-x-circle"></i>
          ) : (
            <i className="bi bi-list" />
          )}
        </div>

        <ul className={isIconClicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((items, index) => (
            <li key={index}>
              <NavLink to={items.url} className={items.className}>
                <i className={items.icon}></i> {items.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
