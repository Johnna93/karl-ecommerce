import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NewArrivalsArea = () => {
  const [products, setProducts] = useState([]); // State for products
  const [activeCategory, setActiveCategory] = useState("*"); // Active category

  // Fetch products from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Save products in state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
  };

  // Filter products based on active category
  const filteredProducts = products.filter((product) =>
    activeCategory === "*" ? true : product.category === activeCategory
  );

  return (
    <section className="new_arrivals_area section_padding_100_0 clearfix">
      {/* New Arrivals Heading */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_heading text-center">
              <h2>New Arrivals</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="karl-projects-menu mb-100">
        <div className="text-center portfolio-menu">
          <button
            className={`btn ${activeCategory === "*" ? "active" : ""}`}
            onClick={() => handleCategoryFilter("*")}
          >
            ALL
          </button>
          <button
            className={`btn ${
              activeCategory === "men's clothing" ? "active" : ""
            }`}
            onClick={() => handleCategoryFilter("men's clothing")}
          >
            MEN
          </button>
          <button
            className={`btn ${
              activeCategory === "women's clothing" ? "active" : ""
            }`}
            onClick={() => handleCategoryFilter("women's clothing")}
          >
            WOMEN
          </button>
          <button
            className={`btn ${activeCategory === "jewelery" ? "active" : ""}`}
            onClick={() => handleCategoryFilter("jewelery")}
          >
            JEWELRY
          </button>
          <button
            className={`btn ${
              activeCategory === "electronics" ? "active" : ""
            }`}
            onClick={() => handleCategoryFilter("electronics")}
          >
            ELECTRONICS
          </button>
        </div>
      </div>

      {/* New Arrivals Grid */}
      <div className="container">
        <div className="row karl-new-arrivals">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 single_gallery_item wow fadeInUpBig"
              data-wow-delay="0.2s"
            >
              <div className="product-img">
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "550px",
                    objectFit: "contain",
                  }}
                />
                <div className="product-quicview">
                  <Link to="#" data-toggle="modal" data-target="#quickview">
                    <i className="ti-plus"></i>
                  </Link>
                </div>
              </div>
              <div className="product-description">
                <h4 className="product-price">${product.price}</h4>
                <p>{product.title}</p>
                <Link to="/cart" className="add-to-cart-btn">
                  ADD TO CART
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsArea;
