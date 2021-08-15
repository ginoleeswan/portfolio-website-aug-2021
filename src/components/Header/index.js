import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function toggleMenu(e) {
    e.preventDefault();
    hideSection();
    toggleNavbar();
    // document.body.classList.toggle("hide-scrolling");
  }

  function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
  }
  function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
  }

  function loadPage(e) {
    // e.preventDefault();
    toggleNavbar();
    hideSection();
    document.querySelector(".nav-toggler").classList.add("hide");

    setTimeout(() => {
      document.querySelector(".nav-toggler").classList.remove("hide");
    }, 500);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="row flex-end">
          <button type="button" className="nav-toggler" onClick={toggleMenu}>
            <span></span>
          </button>
          <nav className="nav">
            <div className="nav-inner">
              <ul>
                <li onClick={loadPage}>
                  <Link to="/" className="nav-item">
                    home
                  </Link>
                </li>
                <li onClick={loadPage}>
                  <Link to="/about" className="nav-item">
                    about
                  </Link>
                </li>
                <li onClick={loadPage}>
                  <Link to="/portfolio" className="nav-item">
                    portfolio
                  </Link>
                </li>
                <li onClick={loadPage}>
                  <Link to="/contact" className="nav-item">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
