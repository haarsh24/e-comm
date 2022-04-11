import "../styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/authContext";

const Navbar = () => {
  const { authState } = useAuth();

  const {
    cartState: { cartItem },
    wishlistState: { wishlistItem },
    filterDispatch,
  } = useCart();

  console.log(cartItem.length);
  console.log(authState);
  return (
    <>
      <div className="header">
        <div className="bars">
          <h2>
            {" "}
            <Link className="logo" to="/">
              SneakerXclub
            </Link>{" "}
          </h2>
        </div>
        <input
          className="input-text input-search"
          placeholder="Search"
          onChange={(e) =>
            filterDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            })
          }
        />
        <div className="nav-icon">
          <Link to="/login" className="h3 m1 badge">
            <span>
              {authState.isLogin
                ? `Hi, ${authState.userData.firstName}`
                : "Login"}
            </span>{" "}
          </Link>

          <Link to="/wishlist">
            {" "}
            <i className="fa fa-heart-o fa-2x badge" aria-hidden="true"></i>
            <span
              className={
                wishlistItem.length === 0 ? "hidden" : "h5 badge-icon "
              }
            >
              {wishlistItem.length}
            </span>
          </Link>

          <Link to="/cart">
            <i
              className="fa fa-shopping-cart fa-2x badge m1"
              aria-hidden="true"
            ></i>

            <span
              className={cartItem.length === 0 ? "hidden" : "h5 badge-icon"}
            >
              {cartItem.length}
            </span>
          </Link>

          <Link to="/signup">
            {" "}
            <i className="fa fa-user-o fa-2x badge" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export { Navbar };
