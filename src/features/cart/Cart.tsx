import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { removeFromCart } from "../../redux/slices/cartSlice";
import Button from "../../components/ui/Button";
import "./cart.css";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      <a>Back to Products</a>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>Price: ${(item.price / 100).toFixed(2)}</p>
                <p>Qty: {item.quantity}</p>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ${(total / 100).toFixed(2)}</h3>
          <Button variant="primary">Proceed to Checkout</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
