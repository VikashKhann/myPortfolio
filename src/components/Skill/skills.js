import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I'm a skilled and passionate Front-End developer with experience in
        creating visually appealing and user-friendly wesbites. I have a strong
        undersatnding of web development and a keen eye for detail. I am
        proficient in HTML, CSS and Javascript, as well as web development tools
        such as React and Angular.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              Creating visually appealing design which are user friendly and
              aesthetic.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>
              Develop Web Applications, static and dynamic, based on
              requirements and tools.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Development</h2>
            <p>
              Build efficient mobile applications with cross platform
              compatibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
