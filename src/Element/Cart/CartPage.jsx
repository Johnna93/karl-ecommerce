import CartEmpty from "./components/CartEmpty";
import CartList from "./components/CartList";

const CartPage = () => {
  const cartlistLength = 2;
  return <div>{cartlistLength ? <CartList /> : <CartEmpty />}</div>;
};

export default CartPage;
