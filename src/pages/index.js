import React from "react";
import profilePic from "../images/GinoLee.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import Circles from "../components/circles";

const Home = () => {
  return (
    <>
      <Circles />
      <Header />
      <section className="home-section align-items-center active">
        <div className="container">
          <div className="row align-items-center">
            <div className="home-text">
              <p>Hello I'm</p>
              <h1>Gino Swanepoel</h1>
              <h2>Front End Developer / Data Scientist</h2>
              <div className="social-links">
                {/* <a href="#" target="_blank">
                  <FaFacebook />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/ginoswanepoel/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/MrGinoLee" target="_blank">
                  <FaTwitter />
                </a>
                <a href="https://github.com/ginoleeswan" target="_blank">
                  <FaGithub />
                </a>

                <a
                  href="https://stackoverflow.com/users/16642242/gino-swanepoel"
                  target="_blank"
                >
                  <FaStackOverflow />
                </a>
              </div>

              <Link to="/about" className="btn">
                about me
              </Link>

              <Link to="/portfolio" className="btn">
                portfolio
              </Link>
            </div>
            <div className="home-img">
              <div className="img-box">
                <img src={profilePic} alt="profile-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
