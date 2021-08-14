import React from "react";
import profilePic from "../images/GinoLee.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Header />
      <section className="home-section align-items-center active">
        <div className="container">
          <div className="row align-items-center">
            <div className="home-text">
              <p>Hello I'm</p>
              <h1>Gino Swanepoel</h1>
              <h2>Front End Developer / Data Scientist</h2>
              <div className="social-links">
                <a href="#" target="_blank">
                  <FaFacebook />
                </a>
                <a href="#" target="_blank">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank">
                  <FaGithub />
                </a>
                <a href="#" target="_blank">
                  <FaLinkedin />
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
