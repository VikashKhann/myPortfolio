import React from "react";
import "./experience.css";
import darkModecheckmark from "../../assets/checkmark.png";
import lightModecheckmark from "../../assets/checkmark1.png";

const Experience = ({ darkMode }) => {
  return (
    <section className={`experience ${darkMode ? "darkMode" : "lightMode"}`}>
      <h1 className={`title ${darkMode ? "darkMode" : "lightMode"}`}>
        Experience
      </h1>
      <span className="experienceDesc">
        Aspiring full-stack developer crafting immersive digital experiences.
        Join me on this coding journey, seamlessly blending design and
        functionality to shape robust web solutions. Eager to apply skills and
        experience to help businesses achieve their goals online
      </span>
      <div className="experience-details-container">
        <div className="about-containers">
          <div
            className={`details-container ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Angular</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>React</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div
            className={`details-container ${
              darkMode ? "darkMode" : "lightMode"
            }`}
          >
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>ASP.NetCore</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Nest JS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>SQL</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>C#</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={darkMode ? darkModecheckmark : lightModecheckmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>Python</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
