import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "./scrollToTop";
import footerlogo from "../assets/img/logo-color.svg";

function Footer() {
  //on click browser move to top
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <footer className="footer">
        {isScrolled && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <NavLink>
              <span class="icon-forward icomoon"></span>
            </NavLink>
          </div>
        )}

        <div className="container">
          <div className="row">
            <div className="col-md-3 d-none d-md-block">
              <NavLink>
                <img src={footerlogo} alt="" />
              </NavLink>
              <article className="pe-3">
                <p className="pt-3">
                  For deciding the quality of the plant material and herbal
                  formulations, assay for chemical markers is an important
                  parameter necessarily to be studied{" "}
                  <NavLink className="font-bold" to="/About">
                    Read More
                  </NavLink>
                </p>
              </article>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-2">
                  <h5 className="footer-col-title font-bold">Company</h5>
                  <ul>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/About">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Services">Services</NavLink>
                    </li>
                    <li>
                      <NavLink to="/Contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 pt-4 pt-md-0">
                  <h5 className="footer-col-title font-bold">Contact</h5>
                  <ul className="contacts">
                    <li>
                      <span className="icon-phone-call"></span> +91-9849601776
                    </li>
                    <li>
                      <span className="icon-email"></span>{" "}
                      info@newhorizonbotanicals.com
                    </li>
                    <li>
                      <h6 className="font-bold">New Horozon Botanicals</h6>
                      <span className="icon-pin"></span> H.No: 8-6-249/22/p,
                      Road # 2 Sri Venkataramana Colony Vanasthalipuram
                      Hyderabad-500070, India
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomFooter background-primary py-3">
          <p className="text-center pb-0 mb-0 font-white">
            All Copy rights Reserved @ New Horizon Biosciences 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
