import { NavLink } from "react-router-dom";
import { togglecart } from "../redux/slice/cartSlice";
import { togglewish } from "../redux/slice/wishSlice";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {

  const dispatch = useDispatch();

    const cartToggle = ()=>{
      dispatch(togglecart(state))
    }

    const wishToggle = ()=>{
      dispatch(togglewish(state))
    }

    const {cartItem, cartOpen} = useSelector((state) => state.cart);
    const {wishitem, wishOpen} = useSelector((state) => state.wish);

    const cartCount = cartItem.length;
    // console.log(cartCount)
    const wishCount = wishitem.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          React Ecommerce
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="buttons text-center">
            <NavLink to="/wish" className="btn btn-outline-dark m-2">
              <i className="fa-sharp fa-solid fa-heart mr-1"></i>{wishCount} Wishlist
            </NavLink>

            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1" ></i>{cartCount} Cart
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
