import { useDispatch, useSelector } from "react-redux";
import { incrementqty, decrementqty, removeitem } from "../redux/slice/cartSlice";

function Cart() {
  const { cartItem } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const cartincrementqty = (itemId) => {
    dispatch(incrementqty(itemId));  // Pass only the itemId
  };

  const cartdecrementqty = (itemId) => {
    dispatch(decrementqty(itemId));  // Pass only the itemId
  };

  const cartremoveitem = (itemId) => {
    dispatch(removeitem(itemId));  // Pass only the itemId
  };

  const cartQuantity = cartItem.length;

  // Calculate total price
  const cartTotal = cartItem.length
    ? cartItem.map((item) => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0)
    : 0;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Cart</h2>

      {cartItem.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty!</h4>
          <p>Add some items to your cart to see them here.</p>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItem.map((item) => {
              const { id, image, title, price, quantity } = item;
              const itemTotal = price * quantity;

              return (
                <div
                  key={id}
                  className="card mb-3 d-flex flex-row align-items-center p-3"
                >
                  <img
                    src={image}
                    alt={title}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />

                  <div className="ms-3">
                    <h5>{title}</h5>
                    <p className="mb-1">Price: ${price}</p> {/* Corrected from item.id to price */}
                    <p className="mb-1">Quantity: {quantity}</p>
                    <p className="mb-1">Total: ${itemTotal.toFixed(2)}</p>
                  </div>

                  <div className="ms-auto d-flex align-items-center">
                    <button
                      className="btn btn-outline-dark btn-sm mx-1"
                      onClick={() => cartdecrementqty(id)} // Pass only the id here
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      className="btn btn-outline-dark btn-sm mx-1"
                      onClick={() => cartincrementqty(id)} // Pass only the id here
                    >
                      +
                    </button>

                    <button
                      className="btn btn-danger btn-sm ms-3"
                      onClick={() => cartremoveitem(id)} // Pass only the id here
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h4>Cart Summary</h4>
              <hr />
              <p>Total Items: {cartQuantity}</p>
              <h5>Total Price: ${cartTotal.toFixed(2)}</h5>
              <button className="btn btn-dark btn-block mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
