import React from "react";
import { NavLink } from "react-router-dom";
import footerlogo from "../assets/img/logo-color.svg";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <NavLink>
                <img src={footerlogo} />
              </NavLink>
              <article className="pe-3">
                <p className="pt-3">
                  For deciding the quality of the plant material and herbal
                  formulations, assay for chemical markers is an important
                  parameter necessarily to be studied{" "}
                  <NavLink className="font-bold">Read More</NavLink>
                </p>
              </article>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-2">
                  <h5 className="footer-col-title font-bold">Company</h5>
                  <ul>
                    <li>
                      <NavLink to="">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="">About us</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Blogs</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Contact</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5 className="footer-col-title font-bold">Products</h5>
                  <ul>
                    <li>
                      <NavLink to="">Phytochemical Reference Standards</NavLink>
                    </li>
                    <li>
                      <NavLink to="">Lead Phytochemicals</NavLink>
                    </li>
                    <li>
                      <NavLink to="">
                        Synthetic analogs of Lead Phytochemicals
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h5 className="footer-col-title font-bold">Contact</h5>
                  <ul className="contacts">
                    <li>
                      <span class="icon-phone-call"></span> (406) 555-0120
                    </li>
                    <li>
                      <span class="icon-email"></span>{" "}
                      mangcoding123@newhorizon.com
                    </li>
                    <li>
                      <span class="icon-pin"></span> IDA Mallapur, Hyderabad,
                      Telangana - 500034
                    </li>
                  </ul>
                  <div className="pt-3 social">
                    <NavLink to="">
                      <span class="icon-facebook"></span>
                    </NavLink>
                    <NavLink to="">
                      <span class="icon-linkedin"></span>
                    </NavLink>
                    <NavLink to="">
                      <span class="icon-twitter"></span>
                    </NavLink>
                  </div>
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
