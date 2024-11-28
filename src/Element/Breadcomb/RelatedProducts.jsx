import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

function RelatedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5") // Fetch 5 products
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="you_may_like_area clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_heading text-center">
              <h2>Related Products</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <OwlCarousel
              className="you_make_like_slider owl-carousel"
              loop
              margin={10}
              autoplay
              autoplayTimeout={6000}
              autoplayHoverPause
            >
              {products.map((product) => (
                <div className="single_gallery_item" key={product.id}>
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
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
