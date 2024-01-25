import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/Solid.PNG";
import logo1 from "../../assets/logo1.png";
import contactImg from "../../assets/contact.png";
import contactImg1 from "../../assets/contact1.png";
import mobMenu from "../../assets/menu.png";
import mobMenuLight from "../../assets/menuLight.png";

import { Link } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  // const navbarStyle = {
  //   background: darkMode ? "rgb(30, 30, 30)" : "white",
  //   color: darkMode ? "white" : "black",
  //   // Add other styles based on dark mode state
  // };

  // const contactBtnStyle = {
  //   background: darkMode ? "white" : "black",
  //   color: darkMode ? "black" : "white",
  // };

  return (
    <>
      <DarkModeSwitch
        className="darkModeToggle"
        style={{ marginBottom: "2rem" }}
        checked={darkMode}
        onChange={toggleDarkMode}
        size={30}
      />
      <nav className={`navbar ${darkMode ? "darkMode" : "lightMode"}`}>
        <img src={darkMode ? logo : logo1} alt="logo" className="logo" />
        <div className="desktopMenu">
          <Link
            activeClass={`active ${darkMode ? "darkMode" : "lightMode"}`}
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`desktopMenuLinkItem ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            Home
          </Link>
          <Link
            activeClass={`active ${darkMode ? "darkMode" : "lightMode"}`}
            to="experience"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={`desktopMenuLinkItem ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            Experience
          </Link>
          <Link
            activeClass={`active ${darkMode ? "darkMode" : "lightMode"}`}
            to="certificates"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={`desktopMenuLinkItem ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            Certifications
          </Link>
          <Link
            activeClass={`active ${darkMode ? "darkMode" : "lightMode"}`}
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className={`desktopMenuLinkItem ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            Projects
          </Link>
        </div>
        {/* <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
      >
        <button className="desktopMenuBtn">
          <img src={contactImg} alt="" className="desktopMenuImg" />
          Contact Me
        </button>
      </Link> */}
        <button
          className={`desktopMenuBtn ${darkMode ? "darkMode" : "lightMode"}`}
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img
            src={darkMode ? contactImg : contactImg1}
            alt=""
            className="desktopMenuImg"
          />
          Contact Me
        </button>
        <img
          src={darkMode ? mobMenu : mobMenuLight}
          alt="menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className={`navMenu ${darkMode ? "darkMode" : "lightMode"}`}
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass={`active ${darkMode ? "darkMode" : "lightMode"}`}
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`linkItem ${darkMode ? "darkMode" : "lightMode"}`}
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass={`active ${darkMode ? "darkMode" : "lightMode"}`}
            to="experience"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className={`linkItem ${darkMode ? "darkMode" : "lightMode"}`}
            onClick={() => setShowMenu(false)}
          >
            Experience
          </Link>
          <Link
            activeClass={`active ${darkMode ? "darkMode" : "lightMode"}`}
            to="certificates"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className={`linkItem ${darkMode ? "darkMode" : "lightMode"}`}
            onClick={() => setShowMenu(false)}
          >
            Certifications
          </Link>
          <Link
            activeClass={`active ${darkMode ? "darkMode" : "lightMode"}`}
            to="projects"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
            className={`linkItem ${darkMode ? "darkMode" : "lightMode"}`}
            onClick={() => setShowMenu(false)}
          >
            Projects
          </Link>
          <Link
            activeClass={`active ${darkMode ? "darkMode" : "lightMode"}`}
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className={`linkItem ${darkMode ? "darkMode" : "lightMode"}`}
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
