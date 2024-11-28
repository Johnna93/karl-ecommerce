import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartList = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Fetch cart data from Fake Store API
    fetch("https://fakestoreapi.com/carts/1") // Replace `/1` with your cart ID
      .then((response) => response.json())
      .then((data) => {
        const products = data.products; // Array of products in the cart
        const promises = products.map((product) =>
          fetch(`https://fakestoreapi.com/products/${product.productId}`)
            .then((res) => res.json())
            .then((productData) => ({
              ...productData,
              quantity: product.quantity,
            }))
        );

        Promise.all(promises).then((cartItems) => {
          setCart(cartItems);

          // Calculate subtotal
          const total = cartItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          setSubtotal(total);
        });
      });
  }, []);

  const updateQuantity = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );

    // Update subtotal
    const updatedSubtotal = cart.reduce(
      (sum, item) =>
        item.id === id
          ? sum + (action === "increase" ? item.price : -item.price)
          : sum,
      subtotal
    );
    setSubtotal(updatedSubtotal);
  };

  if (cart.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="cart_area section_padding_100 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="cart-table clearfix">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="cart_product_img d-flex align-items-center">
                        <a href="#">
                          <img src={item.image} alt={item.title} />
                        </a>
                        <h6>{item.title}</h6>
                      </td>
                      <td className="price">
                        <span>${item.price.toFixed(2)}</span>
                      </td>
                      <td className="qty">
                        <div className="quantity">
                          <span
                            className="qty-minus"
                            onClick={() => updateQuantity(item.id, "decrease")}
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </span>
                          <input
                            type="number"
                            className="qty-text"
                            value={item.quantity}
                            readOnly
                          />
                          <span
                            className="qty-plus"
                            onClick={() => updateQuantity(item.id, "increase")}
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </span>
                        </div>
                      </td>
                      <td className="total_price">
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-footer d-flex mt-30">
              <div className="back-to-shop w-50">
                <Link to="/shop">Continue shopping</Link>
              </div>
              <div className="update-checkout w-50 text-right">
                <a href="#">Clear cart</a>
                <a href="#">Update cart</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-4 offset-lg-8">
            <div className="cart-total-area mt-70">
              <div className="cart-page-heading">
                <h5>Cart total</h5>
                <p>Final info</p>
              </div>
              <ul className="cart-total-chart">
                <li>
                  <span>Subtotal</span> <span>${subtotal.toFixed(2)}</span>
                </li>
                <li>
                  <span>Shipping</span> <span>Free</span>
                </li>
                <li>
                  <span>
                    <strong>Total</strong>
                  </span>{" "}
                  <span>
                    <strong>${subtotal.toFixed(2)}</strong>
                  </span>
                </li>
              </ul>
              <Link to="/checkout" className="btn karl-checkout-btn">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
