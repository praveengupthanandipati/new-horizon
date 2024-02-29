import React from "react";
import { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo-color.svg";

function Header() {
  //hide canvas when click on navitem in mobile
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldAddClass = scrollTop > 100; // Adjust this value as needed
      setIsScrolled(shouldAddClass);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //

  return (
    <div>
      <header className={isScrolled ? "fixed-top-nav fixed-top" : "fixed-top"}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light shadow px-4">
            <div className="navbarnav flex-nowrap">
              <button
                className="navbar-toggler order-last"
                type="button"
                onClick={toggleOffcanvas}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <NavLink className="navbar-brand" to="/">
                <img src={Logo} alt="" />
              </NavLink>
            </div>
            <div
              className={`offcanvas offcanvas-end ${
                isOffcanvasOpen ? "show" : ""
              }`}
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <NavLink
                    className="navbar-brand"
                    to="/"
                    onClick={closeOffcanvas}
                  >
                    <img src={Logo} alt="" />
                  </NavLink>
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  onClick={closeOffcanvas}
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/"
                      onClick={closeOffcanvas}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/About"
                      onClick={closeOffcanvas}
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Products"
                      onClick={closeOffcanvas}
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Services"
                      onClick={closeOffcanvas}
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Contact"
                      onClick={closeOffcanvas}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
