import React from "react";
import { Link } from "react-router-dom";

const FooterArea = () => {
  return (
    <footer className="footer_area">
      <div className="container">
        <div className="row">
          {/* Single Footer Area Start */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="single_footer_area">
              <div className="footer-logo">
                <img src="assets/img/core-img/logo.png" alt="Logo" />
              </div>
              <div className="copywrite_text d-flex align-items-center">
                <p>
                  Copyright &copy; {new Date().getFullYear()} All rights
                  reserved | Made with{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Colorlib
                  </a>{" "}
                  &amp; distributed by{" "}
                  <a
                    href="https://themewagon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ThemeWagon
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Single Footer Area Start */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <div className="single_footer_area">
              <ul className="footer_widget_menu">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/returns">Returns</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Single Footer Area Start */}
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <div className="single_footer_area">
              <ul className="footer_widget_menu">
                <li>
                  <Link to="/account">My Account</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping</Link>
                </li>
                <li>
                  <Link to="/policies">Our Policies</Link>
                </li>
                <li>
                  <Link to="/affiliates">Affiliates</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Single Footer Area Start */}
          <div className="col-12 col-lg-5">
            <div className="single_footer_area">
              <div className="footer_heading mb-30">
                <h6>Subscribe to our newsletter</h6>
              </div>
              <div className="subscribtion_form">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="mail"
                    className="mail"
                    placeholder="Your email here"
                  />
                  <button type="submit" className="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        {/* Footer Bottom Area Start */}
        <div className="footer_bottom_area">
          <div className="row">
            <div className="col-12">
              <div className="footer_social_area text-center">
                <Link to="#">
                  <i className="fa fa-pinterest" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
                <Link to="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArea;
