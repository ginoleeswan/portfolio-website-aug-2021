import React, { useState } from "react";
import aboutPic from "../../images/GinoLee.png";
import { Link } from "react-router-dom";

const About = () => {
  const [activeEd, setActiveEd] = useState(true);
  const [activeEx, setActiveEx] = useState(false);

  const setEducationActive = (e) => {
    e.preventDefault();
    if (!activeEd && activeEx) {
      setActiveEd(!activeEd);
      setActiveEx(!activeEx);
    }
  };
  const setExperienceActive = (e) => {
    e.preventDefault();
    if (!activeEx && activeEd) {
      setActiveEd(!activeEd);
      setActiveEx(!activeEx);
    }
  };

  return (
    <section className="about-section sec-padding active">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box">
              <img src={aboutPic} alt="about img" />
            </div>
          </div>
          <div className="about-text">
            <p>
              Passionate front-end developer / data scientist / musician from
              South Africa <br />
              <br />
              🌱 &nbsp; I’m currently working on learning the MERN stack,
              Backend & APIs <br />
              👯 &nbsp; I’m looking to collaborate on front end development{" "}
              <br />
              🤝 &nbsp; I’m looking for help with anything Backend / API's{" "}
              <br />⚡ &nbsp; Fun fact: I am also a music producer &
              singer/songwriter!
            </p>
            <h3>Skills</h3>
            <div className="skills">
              <div className="skill-item">ReactJS</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">HTML5</div>
              <div className="skill-item">CSS3</div>
              <div className="skill-item">MaterialUI</div>
              <div className="skill-item">Python</div>
              <div className="skill-item">Qt</div>
              <div className="skill-item">Firebase</div>
              <div className="skill-item">C++</div>
            </div>

            <div className="about-tabs">
              <button
                type="button"
                className={`tab-item ${activeEd ? "active" : ""}`}
                dataTarget="#education"
                onClick={setEducationActive}
              >
                education
              </button>
              <button
                type="button"
                className={`tab-item ${activeEx ? "active" : ""}`}
                dataTarget="#experience"
                onClick={setExperienceActive}
              >
                experience
              </button>
            </div>

            {/* Education Start */}
            <div
              className={`tab-content ${activeEd ? "active" : ""}`}
              id="education"
            >
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2020 - 2021</span>
                  <h4>
                    Data Science with Python - <span>GetSmarter</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum at sed enim nobis temporibus reprehenderit.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="date">2018 - 2021</span>
                  <h4>
                    bachelor of science - <span>UNISA</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum at sed enim nobis temporibus reprehenderit.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="date">2014 - 2015</span>
                  <h4>
                    acting for film - <span>New York Film Academy</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum at sed enim nobis temporibus reprehenderit.
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="date">2009 - 2013</span>
                  <h4>
                    Matric Certificate - <span>Theodor Herzl High School</span>
                  </h4>
                  <p>Achieved an A aggrigate, 8 disctinctions received.</p>
                </div>
              </div>
            </div>
            {/* Education End */}

            {/* Experience Start */}
            <div
              className={`tab-content ${activeEx ? "active" : ""}`}
              id="experience"
            >
              <div className="timeline">
                <div className="timeline-item">
                  <span className="date">2013 - 2016</span>
                  <h4>
                    web developer - <span>the webdev</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt nostrum nisi, commodi provident hic velit!
                  </p>
                </div>
                <div className="timeline-item">
                  <span className="date">2013 - 2016</span>
                  <h4>
                    web developer - <span>the webdev</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt nostrum nisi, commodi provident hic velit!
                  </p>
                </div>
              </div>
            </div>
            {/* Experience End  */}

            <Link to="#" class="btn">
              download CV
            </Link>
            <Link to="/contact" class="btn">
              contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
