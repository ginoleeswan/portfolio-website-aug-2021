import React from "react";

import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section sec-padding active">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="contact-form">
            <form>
              <div className="row">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input-control"
                    required
                  />
                </div>
                <div className="input-group">
                  <textarea
                    placeholder="Message..."
                    className="input-control"
                    required
                  ></textarea>
                </div>
                <div className="submit-btn">
                  <button type="submit" className="btn">
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Email:</h3>
              <p>ginoleemusic@live.com</p>
            </div>
            <div className="contact-info-item">
              <h3>Follow Me:</h3>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
