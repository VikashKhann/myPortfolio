import React from "react";
import "./certificates.css";
import JsLogo from "../../assets/javascript-logo.png";
import PythonLogo from "../../assets/python-logo.png";
import HtmlLogo from "../../assets/html-logo.png";

const Certificates = ({ darkMode }) => {
  return (
    <section id="certificates">
      <span className="certificateTitle">My Certifications</span>
      <span
        className={`certificateDesc ${darkMode ? "darkMode" : "lightMode"}`}
      >
        My commitment to professional growth is evidenced by the successful
        completion of relevant online courses, resulting in certifications that
        validate the breadth and depth of my skills. These certifications serve
        as a testament to my dedication to staying current in the ever-evolving
        landscape of technology.
      </span>
      <div className="certificateBars">
        <div
          className={`certificateBar ${darkMode ? "darkMode" : "lightMode"}`}
          onClick={() =>
            window.open(
              "https://codedamn.com/certificate/verify/d78188466d0aea37ff10130d2113a4cfccf6e228",
              "_blank"
            )
          }
        >
          <img src={JsLogo} alt="UIDesign" className="certificateBarImg" />
          <div
            className={`certificateBarText ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            <h2>JavaScript</h2>
            <p>
              Mastered JavaScript fundamentals with codeDamn—covering variables,
              loops, functions, and DOM manipulation for robust web development.
            </p>
          </div>
        </div>
        <div
          className={`certificateBar ${darkMode ? "darkMode" : "lightMode"}`}
          onClick={() =>
            window.open(
              "https://www.udemy.com/certificate/UC-bb2dd4b2-5972-4f20-ac9b-d9b03423e401/",
              "_blank"
            )
          }
        >
          <img src={PythonLogo} alt="WebDesign" className="certificateBarImg" />
          <div
            className={`certificateBarText ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            <h2>Python</h2>
            <p>
              Udemy-certified in Python Bootcamp—comprehensive training in data
              structures, object-oriented programming, and practical Python
              applications.
            </p>
          </div>
        </div>
        <div
          className={`certificateBar ${darkMode ? "darkMode" : "lightMode"}`}
          onClick={() =>
            window.open(
              "https://www.freecodecamp.org/certification/Khanna_VK/responsive-web-design",
              "_blank"
            )
          }
        >
          <img src={HtmlLogo} alt="AppDesign" className="certificateBarImg" />
          <div
            className={`certificateBarText ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            <h2>Responsive Web Design</h2>
            <p>
              freecodecamp.org-certified in Responsive Web Design, adept in CSS
              Flexbox, CSS Grid, and media queries for optimal user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
