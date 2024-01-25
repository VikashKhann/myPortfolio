import React from "react";
import "./projects.css";
import project1 from "../../assets/project-1.png";
import project3 from "../../assets/project-2.png";
import project2 from "../../assets/project-3.png";

const Projects = ({ darkMode }) => {
  return (
    <section id="projects">
      {/* <p className="section__text__p1">Browse My Recent</p> */}
      <h1 className="title">Projects</h1>
      <span className={`experienceDesc ${darkMode ? "darkMode" : "lightMode"}`}>
        Dive into my coding world with a click. This section showcases my
        diverse projects, ranging from my React-powered portfolio to a
        full-stack Pizza Ordering app (Angular, Express, Node, MongoDB) and a
        simple BMI Calculator (JS, HTML, CSS). Each button below leads you to
        the GitHub repository, revealing the code that brings these projects to
        life. Welcome to my digital canvas.
      </span>
      <div className="experience-details-container">
        <div className="about-containers">
          <div
            className={`details-container color-container ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            <div className="article-container">
              <img src={project1} alt="Project 1" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Portfolio</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/VikashKhann/myPortfolio",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
          <div
            className={`details-container color-container ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            <div className="article-container">
              <img src={project2} alt="Project 2" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">Pizzeria</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/VikashKhann/Pizzeria",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
          <div
            className={`details-container color-container ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            <div className="article-container">
              <img src={project3} alt="Project 3" className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">To-Do List</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() =>
                  window.open(
                    "https://github.com/VikashKhann/todoapp",
                    "_blank"
                  )
                }
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
