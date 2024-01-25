import React from "react";
import "./intro.css";
import bg from "../../assets/Vikas.png";
import pattern from "../../assets/pattern.png";
import pattern1 from "../../assets/pattern1.png";
import { Link } from "react-scroll";
// import btnImg from "../../assets/hireme.png";
// import btnImg2 from "../../assets/hireme1.png";
import githubLight from "../../assets/github-mark.png";
import githubDark from "../../assets/github-mark-white.png";
import linkedInDark from "../../assets/linkedin.png";
import linkedInLight from "../../assets/linkedInLight.png";
import downloadImg from "../../assets/downlaod.png";
import downloadImg1 from "../../assets/download1.png";

const Intro = ({ darkMode }) => {
  const handleDownload = (event) => {
    // Prevent the default navigation behavior
    event.preventDefault();

    const pdfUrl = "/pdf/myResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={`intro ${darkMode ? "darkMode" : "lightMode"}`}>
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm{" "}
          <span className={`introName ${darkMode ? "darkMode" : "lightMode"}`}>
            Vikash
          </span>
          <br />
          Web Developer
        </span>
        <p className="introPara">
          I'm a skilled and passionate Front-End developer with experience
          <br />
          in creating visually appealing and user-friendly wesbites
        </p>

        <div className="buttongrp">
          <div className="btnscont">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <button
                className={`btn ${
                  darkMode ? "darkMode HireMe" : "lightMode HireMe"
                }`}
              >
                {/* <img
                  src={darkMode ? btnImg : btnImg2}
                  alt="Hire me"
                  className="btnImg"
                /> */}
                Hire me
              </button>
            </Link>
            <Link to="#" onClick={handleDownload}>
              <button
                className={`btn ${darkMode ? "darkMode CV" : "lightMode CV"}`}
              >
                <img
                  src={darkMode ? downloadImg : downloadImg1}
                  alt="download CV"
                  className="btnImg"
                />
                Download CV
              </button>
            </Link>
          </div>
          <div id="socials-container">
            <img
              src={darkMode ? linkedInDark : linkedInLight}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vikash-khanna-v-07797b15a/",
                  "_blank"
                )
              }
            />
            <img
              src={darkMode ? githubDark : githubLight}
              alt="My Github profile"
              className="icon"
              onClick={() =>
                window.open("https://github.com/VikashKhann", "_blank")
              }
            />
          </div>
        </div>
      </div>
      <div className="imgbox">
        <img
          src={darkMode ? pattern : pattern1}
          alt=""
          className="bgBackground"
        />
        <img src={bg} alt="" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
