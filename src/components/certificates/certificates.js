import React from "react";
import "./certificates.css";
import JsLogo from "../../assets/javascript-logo.png";
import PythonLogo from "../../assets/python-logo.png";
import HtmlLogo from "../../assets/html-logo.png";

const Certificates = () => {
  return (
    <section id="certificates">
      <span className="certificateTitle">My Certifications</span>
      <span className="certificateDesc">
        My commitment to professional growth is evidenced by the successful
        completion of relevant online courses, resulting in certifications that
        validate the breadth and depth of my skills. These certifications serve
        as a testament to my dedication to staying current in the ever-evolving
        landscape of technology.
      </span>
      <div className="certificateBars">
        <div className="certificateBar">
          <img src={JsLogo} alt="UIDesign" className="certificateBarImg" />
          <div className="certificateBarText">
            <h2>JavaScript</h2>
            <p>
              Mastered JavaScript fundamentals with codeDamn—covering variables,
              loops, functions, and DOM manipulation for robust web development.
            </p>
          </div>
        </div>
        <div className="certificateBar">
          <img src={PythonLogo} alt="WebDesign" className="certificateBarImg" />
          <div className="certificateBarText">
            <h2>Python</h2>
            <p>
              Udemy-certified in Python Bootcamp—comprehensive training in data
              structures, object-oriented programming, and practical Python
              applications.
            </p>
          </div>
        </div>
        <div className="certificateBar">
          <img src={HtmlLogo} alt="AppDesign" className="certificateBarImg" />
          <div className="certificateBarText">
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
