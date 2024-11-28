import React from "react";
import { Link } from "react-router-dom";
import HeaderArea from "./Content/HeaderArea";
import TopDiscountArea from "./Content/TopDiscountArea";

function Header() {
  return (
    <section>
      <div id="wrapper">
        {/* ****** Header Area Start ****** */}
        <HeaderArea />
        {/* ****** Header Area End ****** */}

        {/* ****** Top Discount Area Start ****** */}
        <TopDiscountArea />
        {/* ****** Top Discount Area End ****** */}
      </div>
    </section>
  );
}

export default Header;
