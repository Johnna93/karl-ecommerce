import React from "react";
import { Link } from "react-router-dom";

const TopDiscountArea = () => {
  return (
    <section className="top-discount-area d-md-flex align-items-center">
      {/* Single Discount Area */}
      <div className="single-discount-area">
        <h5>Free Shipping &amp; Returns</h5>
        <h6>
          <Link to="/shop">BUY NOW</Link>
        </h6>
      </div>
      {/* Single Discount Area */}
      <div className="single-discount-area">
        <h5>20% Discount for all dresses</h5>
        <h6>USE CODE: Colorlib</h6>
      </div>
      {/* Single Discount Area */}
      <div className="single-discount-area">
        <h5>20% Discount for students</h5>
        <h6>USE CODE: Colorlib</h6>
      </div>
    </section>
  );
};

export default TopDiscountArea;
