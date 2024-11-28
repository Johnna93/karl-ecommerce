import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product data from the Fake Store API
    fetch("https://fakestoreapi.com/products/1") // Replace `1` with a dynamic ID if needed
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <section className="single_product_details_area section_padding_0_100">
        <div className="container">
          <div className="row">
            {/* Product Images */}
            <div className="col-12 col-md-6">
              <div className="single_product_thumb">
                <div
                  id="product_details_slider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={product.image}
                        alt={product.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="col-12 col-md-6">
              <div className="single_product_desc">
                <h4 className="title">{product.title}</h4>
                <h4 className="price">${product.price}</h4>
                <p className="available">
                  Available: <span className="text-muted">In Stock</span>
                </p>

                <div className="single_product_ratings mb-15">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa ${
                        i < Math.round(product.rating.rate)
                          ? "fa-star"
                          : "fa-star-o"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <div className="widget size mb-50">
                  <h6 className="widget-title">Size</h6>
                  <div className="widget-desc">
                    <ul>
                      {["S", "M", "L", "XL"].map((size) => (
                        <li key={size}>
                          <a href="#">{size}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Add to Cart */}
                <form className="cart clearfix mb-50 d-flex" method="post">
                  <div className="quantity">
                    <span
                      className="qty-minus"
                      onClick={() =>
                        setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                      }
                    >
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    <input
                      type="number"
                      className="qty-text"
                      value={quantity}
                      readOnly
                    />
                    <span
                      className="qty-plus"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn cart-submit d-block"
                    onClick={() => alert(`Added ${quantity} to cart`)}
                  >
                    Add to cart
                  </button>
                </form>

                {/* Accordion */}
                <div id="accordion" role="tablist">
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne">
                      <h6 className="mb-0">
                        <a
                          data-toggle="collapse"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Description
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{product.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" role="tab" id="headingThree">
                      <h6 className="mb-0">
                        <a
                          className="collapsed"
                          data-toggle="collapse"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Shipping & Returns
                        </a>
                      </h6>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>
                          Free shipping for orders over $50. Returns accepted
                          within 30 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
