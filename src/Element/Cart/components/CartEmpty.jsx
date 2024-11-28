import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="cart_area section_padding_100 clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="btn karl-checkout-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
