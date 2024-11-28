import React, { useState } from "react";

const CategoriesSideMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="categories-side-menu">
      <div id="sideMenuClose">
        <i className="ti-close"></i>
      </div>

      <div className="nav-side-menu">
        <div className="menu-list">
          <h6>Categories</h6>
          <ul id="menu-content" className="menu-content">
            <li className={activeMenu === "women" ? "active" : ""}>
              <a href="#" onClick={() => toggleMenu("women")}>
                Woman Wear <span className="arrow"></span>
              </a>
              {activeMenu === "women" && (
                <ul className="sub-menu">
                  <li>
                    <a href="#">Midi Dresses</a>
                  </li>
                  <li>
                    <a href="#">Maxi Dresses</a>
                  </li>
                  <li>
                    <a href="#">Prom Dresses</a>
                  </li>
                  <li>
                    <a href="#">Little Black Dresses</a>
                  </li>
                  <li>
                    <a href="#">Mini Dresses</a>
                  </li>
                </ul>
              )}
            </li>

            <li className={activeMenu === "man" ? "active" : ""}>
              <a href="#" onClick={() => toggleMenu("man")}>
                Man Wear <span className="arrow"></span>
              </a>
              {activeMenu === "man" && (
                <ul className="sub-menu">
                  <li>
                    <a href="#">Man Dresses</a>
                  </li>
                  <li>
                    <a href="#">Man Black Dresses</a>
                  </li>
                  <li>
                    <a href="#">Man Mini Dresses</a>
                  </li>
                </ul>
              )}
            </li>

            <li className={activeMenu === "kids" ? "active" : ""}>
              <a href="#" onClick={() => toggleMenu("kids")}>
                Children <span className="arrow"></span>
              </a>
              {activeMenu === "kids" && (
                <ul className="sub-menu">
                  <li>
                    <a href="#">Children Dresses</a>
                  </li>
                  <li>
                    <a href="#">Mini Dresses</a>
                  </li>
                </ul>
              )}
            </li>

            <li className={activeMenu === "bags" ? "active" : ""}>
              <a href="#" onClick={() => toggleMenu("bags")}>
                Bags & Purses <span className="arrow"></span>
              </a>
              {activeMenu === "bags" && (
                <ul className="sub-menu">
                  <li>
                    <a href="#">Bags</a>
                  </li>
                  <li>
                    <a href="#">Purses</a>
                  </li>
                </ul>
              )}
            </li>

            <li className={activeMenu === "eyewear" ? "active" : ""}>
              <a href="#" onClick={() => toggleMenu("eyewear")}>
                Eyewear <span className="arrow"></span>
              </a>
              {activeMenu === "eyewear" && (
                <ul className="sub-menu">
                  <li>
                    <a href="#">Eyewear Style 1</a>
                  </li>
                  <li>
                    <a href="#">Eyewear Style 2</a>
                  </li>
                  <li>
                    <a href="#">Eyewear Style 3</a>
                  </li>
                </ul>
              )}
            </li>

            <li className={activeMenu === "footwear" ? "active" : ""}>
              <a href="#" onClick={() => toggleMenu("footwear")}>
                Footwear <span className="arrow"></span>
              </a>
              {activeMenu === "footwear" && (
                <ul className="sub-menu">
                  <li>
                    <a href="#">Footwear 1</a>
                  </li>
                  <li>
                    <a href="#">Footwear 2</a>
                  </li>
                  <li>
                    <a href="#">Footwear 3</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSideMenu;
