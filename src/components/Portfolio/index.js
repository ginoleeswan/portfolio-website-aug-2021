import React, { useState } from "react";
import todo from "../../gifs/todo-list.gif";
import weather from "../../gifs/weather-app.gif";
import expenses from "../../images/expense-tracker.png";
import covid from "../../images/covid-tracker-web.png";
import chat from "../../images/chat-app.png";
import portfolio from "../../gifs/portfolio-website.gif";

import { IoClose } from "react-icons/io5";

const Portfolio = () => {
  const [activePop, setActivePop] = useState(false);
  const [activeMain, setActiveMain] = useState(true);

  const setPopupActive = (e) => {
    e.preventDefault();
    if (!activePop && activeMain) {
      setActivePop(!activePop);
      setActiveMain(!activeMain);
    }
    document.body.classList.add("hide-scrolling");
    document.querySelector("section.active").classList.add("fade-out");
    portfolioItemDetails(e.target.parentElement);
  };
  const setMainActive = (e) => {
    e.preventDefault();
    if (!activeMain && activePop) {
      setActivePop(!activePop);
      setActiveMain(!activeMain);
    }
    document.querySelector("section.active").classList.remove("fade-out");
    document.body.classList.remove("hide-scrolling");
  };

  function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src =
      portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
      portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
      ".portfolio-item-details"
    ).innerHTML;
  }

  return (
    <>
      <section
        className={`portfolio-section sec-padding ${
          activeMain ? "" : "fade-out"
        } active`}
      >
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>recent work</h2>
            </div>
          </div>
          <div className="row">
            {/* Portfolio item start */}
            <div className="portfolio-item">
              <div
                className="portfolio-item-thumbnail"
                // onClick={setPopupActive}
              >
                <img src={covid} alt="covid thumb" />
              </div>
              <h3 className="portfolio-item-title">COVID-19 Tracker</h3>
              <button
                type="button"
                className="btn view-project-btn"
                onClick={setPopupActive}
              >
                view
              </button>
              <button type="button" className="btn view-project-btn">
                <a
                  href="https://github.com/ginoleeswan/covid-19-tracker"
                  target="_blank"
                >
                  view repo
                </a>
              </button>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>A COVID-19 Tracker made with ReactJS</p>
                </div>
                <div className="general-info">
                  <ul>
                    <li>
                      Created - <span>August 2021</span>
                    </li>
                    <li>
                      Technologies used -{" "}
                      <span>
                        ReactJS, JavaScript, MaterialUI, Firebase, HTML5, CSS3
                      </span>
                    </li>
                    <li>
                      Role - <span>Front-End</span>
                    </li>
                    <li>
                      View Live -{" "}
                      <span>
                        <a
                          href="https://covid-19-tracker-3342b.web.app/"
                          target="_blank"
                        >
                          https://covid-19-tracker-3342b.web.app/
                        </a>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Portfolio item end */}
            {/* Portfolio item start */}
            <div className="portfolio-item">
              <div
                className="portfolio-item-thumbnail"
                onClick={setPopupActive}
              >
                <img src={chat} alt="chat thumb" />
              </div>
              <h3 className="portfolio-item-title">Chat App</h3>
              <button
                type="button"
                className="btn view-project-btn"
                onClick={setPopupActive}
              >
                view
              </button>
              <button type="button" className="btn view-project-btn">
                <a
                  href="https://github.com/ginoleeswan/chat-app-firebase"
                  target="_blank"
                >
                  view repo
                </a>
              </button>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>
                    A chat application built in ReactJS and deployed with
                    Firebase.
                  </p>
                </div>
                <div className="general-info">
                  <ul>
                    <li>
                      Created - <span>August 2021</span>
                    </li>
                    <li>
                      Technologies used -{" "}
                      <span>ReactJS, JavaScript, Firebase, HTML5, CSS3</span>
                    </li>
                    <li>
                      Role - <span>Full-Stack</span>
                    </li>
                    <li>
                      View Live -{" "}
                      <span>
                        <a
                          href="https://react-firechat-b7d2c.web.app/"
                          target="_blank"
                        >
                          https://react-firechat-b7d2c.web.app/
                        </a>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Portfolio item end */}
            {/* Portfolio item start */}
            <div className="portfolio-item">
              <div
                className="portfolio-item-thumbnail"
                onClick={setPopupActive}
              >
                <img src={portfolio} alt="portfolio thumb" />
              </div>
              <h3 className="portfolio-item-title">Portfolio Website</h3>
              <button
                type="button"
                className="btn view-project-btn"
                onClick={setPopupActive}
              >
                view
              </button>
              <button type="button" className="btn view-project-btn">
                <a
                  href="https://github.com/ginoleeswan/portfolio-website"
                  target="_blank"
                >
                  view repo
                </a>
              </button>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>
                    My old Portfolio Website made in React using
                    styled-components.
                  </p>
                </div>
                <div className="general-info">
                  <ul>
                    <li>
                      Created - <span>Aug 2021</span>
                    </li>
                    <li>
                      Technologies used -{" "}
                      <span>
                        ReactJS, JavaScript, Styled Components, HTML5, CSS3
                      </span>
                    </li>
                    <li>
                      Role - <span>Front-End</span>
                    </li>
                    <li>
                      View Live -{" "}
                      <span>
                        <a
                          href="https://ginoleeswan.github.io/portfolio-website/"
                          target="_blank"
                        >
                          https://ginoleeswan.github.io/portfolio-website/
                        </a>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Portfolio item end */}
            {/* Portfolio item start */}
            <div className="portfolio-item">
              <div
                className="portfolio-item-thumbnail"
                onClick={setPopupActive}
              >
                <img src={todo} alt="todo list thumb" />
              </div>
              <h3 className="portfolio-item-title">To-do List</h3>
              <button
                type="button"
                className="btn view-project-btn"
                onClick={setPopupActive}
              >
                view
              </button>
              <button type="button" className="btn view-project-btn">
                <a
                  href="https://github.com/ginoleeswan/todo-list-basic"
                  target="_blank"
                >
                  view repo
                </a>
              </button>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>A simple to-do list web application built with React.</p>
                </div>
                <div className="general-info">
                  <ul>
                    <li>
                      Created - <span>July 2021</span>
                    </li>
                    <li>
                      Technologies used -{" "}
                      <span>ReactJS, JavaScript, HTML5, CSS3</span>
                    </li>
                    <li>
                      Role - <span>Front-End</span>
                    </li>
                    <li>
                      View Live -{" "}
                      <span>
                        <a
                          href="https://ginoleeswan.github.io/todo-list-basic/"
                          target="_blank"
                        >
                          https://ginoleeswan.github.io/todo-list-basic/
                        </a>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Portfolio item end */}
            {/* Portfolio item start */}
            <div className="portfolio-item">
              <div
                className="portfolio-item-thumbnail"
                onClick={setPopupActive}
              >
                <img src={weather} alt="weather thumb" />
              </div>
              <h3 className="portfolio-item-title">Weather App</h3>
              <button
                type="button"
                className="btn view-project-btn"
                onClick={setPopupActive}
              >
                view
              </button>
              <button type="button" className="btn view-project-btn">
                <a
                  href="https://github.com/ginoleeswan/weather-app-basic"
                  target="_blank"
                >
                  view repo
                </a>
              </button>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>
                    A simple weather web application made with React. Uses
                    external OpenWeatherMap API.
                  </p>
                </div>
                <div className="general-info">
                  <ul>
                    <li>
                      Created - <span>July 2021</span>
                    </li>
                    <li>
                      Technologies used -{" "}
                      <span>ReactJS, JavaScript, HTML5, CSS3</span>
                    </li>
                    <li>
                      Role - <span>Front-End</span>
                    </li>
                    <li>
                      View Live -{" "}
                      <span>
                        <a
                          href="https://ginoleeswan.github.io/weather-app-basic/"
                          target="_blank"
                        >
                          https://ginoleeswan.github.io/weather-app-basic/
                        </a>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Portfolio item end */}
            {/* Portfolio item start */}
            <div className="portfolio-item">
              <div
                className="portfolio-item-thumbnail"
                onClick={setPopupActive}
              >
                <img src={expenses} alt="expenses thumb" />
              </div>
              <h3 className="portfolio-item-title">Expenses Tracker</h3>
              <button
                type="button"
                className="btn view-project-btn"
                onClick={setPopupActive}
              >
                view
              </button>
              <button type="button" className="btn view-project-btn">
                <a
                  href="https://github.com/ginoleeswan/expense-tracker-react"
                  target="_blank"
                >
                  view repo
                </a>
              </button>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>An expense tracker made in React</p>
                </div>
                <div className="general-info">
                  <ul>
                    <li>
                      Created - <span>July 2021</span>
                    </li>
                    <li>
                      Technologies used -{" "}
                      <span>ReactJS, JavaScript, HTML5, CSS3</span>
                    </li>
                    <li>
                      Role - <span>Front-End</span>
                    </li>
                    <li>
                      View Live -{" "}
                      <span>
                        <a
                          href="https://ginoleeswan.github.io/expense-tracker-react/"
                          target="_blank"
                        >
                          https://ginoleeswan.github.io/expense-tracker-react/
                        </a>{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Portfolio item end */}
          </div>
        </div>
      </section>

      <div className={`portfolio-popup ${activePop ? "open" : ""} `}>
        <div className="pp-inner hide-scrolling" onClick={setMainActive}>
          <div className="pp-content">
            <div className="pp-header">
              <button
                type="button"
                className="btn pp-close"
                onClick={setMainActive}
              >
                <IoClose className="exit-icon" />
              </button>
              <div className="pp-thumbnail">
                <img src={weather} alt="weather thumb" />
              </div>
              <h3></h3>
            </div>
            <div className="pp-body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
