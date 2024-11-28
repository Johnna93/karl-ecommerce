import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_area">
      {/* Top Header Area Start */}
      <div className="top_header_area">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-end">
            <div className="col-12 col-lg-7">
              <div className="top_single_area d-flex align-items-center">
                {/* Logo Area */}
                <div className="top_logo">
                  <Link to="/">
                    <img src="assets/img/core-img/logo.png" alt="logo" />
                  </Link>
                </div>
                {/* Cart & Menu Area */}
                <div className="header-cart-menu d-flex align-items-center ml-auto">
                  {/* Cart Area */}
                  <div className="cart">
                    <Link to="/cart" id="header-cart-btn">
                      <span className="cart_quantity">2</span>
                      <i className="ti-bag"></i> Your Bag $20
                    </Link>
                    {/* Cart List Area */}
                    <ul className="cart-list">
                      <li>
                        <Link to="#" className="image">
                          <img
                            src="assets/img/product-img/product-10.jpg"
                            className="cart-thumb"
                            alt="product"
                          />
                        </Link>
                        <div className="cart-item-desc">
                          <h6>
                            <Link to="#">Women's Fashion</Link>
                          </h6>
                          <p>
                            1x - <span className="price">$10</span>
                          </p>
                        </div>
                        <span className="dropdown-product-remove">
                          <i className="icon-cross"></i>
                        </span>
                      </li>
                      <li>
                        <Link to="#" className="image">
                          <img
                            src="assets/img/product-img/product-11.jpg"
                            className="cart-thumb"
                            alt="product"
                          />
                        </Link>
                        <div className="cart-item-desc">
                          <h6>
                            <Link to="#">Women's Fashion</Link>
                          </h6>
                          <p>
                            1x - <span className="price">$10</span>
                          </p>
                        </div>
                        <span className="dropdown-product-remove">
                          <i className="icon-cross"></i>
                        </span>
                      </li>
                      <li className="total">
                        <span className="pull-right">Total: $20.00</span>
                        <Link to="/cart" className="btn btn-sm btn-cart">
                          Cart
                        </Link>
                        <Link
                          to="/checkout"
                          className="btn btn-sm btn-checkout"
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-right-side-menu ml-15">
                    <Link to="#" id="sideMenuBtn">
                      <i className="ti-menu" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Header Area End */}
      <div className="main_header_area">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 d-md-flex justify-content-between">
              {/* Header Social Area */}
              <div className="header-social-area">
                <Link to="#">
                  <span className="karl-level">Share</span>{" "}
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
              {/* Menu Area */}
              <div className="main-menu-area">
                <nav className="navbar navbar-expand-lg align-items-start">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#karl-navbar"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="ti-menu"></i>
                    </span>
                  </button>
                  <div
                    className="collapse navbar-collapse align-items-start collapse"
                    id="karl-navbar"
                  >
                    <ul className="navbar-nav animated" id="nav">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          to="#"
                          id="karlDropdown"
                          role="button"
                          data-toggle="dropdown"
                        >
                          Pages
                        </Link>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="karlDropdown"
                        >
                          <Link className="dropdown-item" to="/">
                            Home
                          </Link>
                          <Link className="dropdown-item" to="/shop">
                            Shop
                          </Link>
                          <Link className="dropdown-item" to="/product-details">
                            Product Details
                          </Link>
                          <Link className="dropdown-item" to="/cart">
                            Cart
                          </Link>
                          <Link className="dropdown-item" to="/checkout">
                            Checkout
                          </Link>
                        </div>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/dresses">
                          Dresses
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/shoes">
                          <span className="karl-level">hot</span> Shoes
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* Help Line */}
              <div className="help-line">
                <Link to="tel:+346573556778">
                  <i className="ti-headphone-alt"></i> +34 657 3556 778
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
