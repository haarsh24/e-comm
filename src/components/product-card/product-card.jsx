import "../styles/main.css";
import { useAuth } from "../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import {
  updateCartItem,
  updateWishlistItem,
  RemoveFromWishlist,
} from "../../utilities/helpers/api-calls-helper";
import { useState } from "react";

const ProductCard = (props) => {
    const [cartClicked, setCartClicked] = useState(false);
    const [wishlistClicked, setWishlistClicked] = useState(false);
  const item = props.singleProduct;
  console.log(item);
  const navigate = useNavigate();
  const {
    authState: { isLogin, token },
  } = useAuth();
    
  const { cartDispatch, wishlistDispatch } = useCart();

  const addToCardHandler = () => {
    setCartClicked(true);
    if (isLogin) {
      console.log("logged in ");
      cartDispatch({ type: "ADD_TO_CART", payload: item });
      updateCartItem(item, token);
    } else {
      navigate("/login");
    }
  };
    const WishlistHandler = () => {
        wishlistClicked ? setWishlistClicked(false) : setWishlistClicked(true);
        
    if (isLogin) {
        if(wishlistClicked===false) 
           {
                wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item });
                updateWishlistItem(item, token);
        } else {
            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
            RemoveFromWishlist(item,token)
        }
            
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="product-collection item  ">
        <div className="collection-detail flex-column card-container p1 m2">
          <div className="product-rating  ">{item.rating}⭐</div>
          <Link to={`/products/${item._id}`}>
          <img className=" product-img " src={item.image} />
          </Link>
          <div className="product-collection-detail p1 flex-column">
            <div className="product-summary h5">{item.title}</div>
            <div className="product-price price-title flex h4 m-tb-1">
              ₹ {item.price}
              <button
                className={
                  (wishlistClicked) ? " btn btn-wishlist btn-wishlist-clicked " : "btn btn-wishlist"
                }
                onClick={WishlistHandler}
              >
                <i className="fa fa-heart-o "></i>
              </button>
            </div>
            <button
              className={cartClicked ? "hidden" : "btn btn-add-to-cart  mb-1"}
              onClick={addToCardHandler}
            >
              Add to Cart
            </button>
            <button
              className={cartClicked ? "btn btn-add-to-cart  mb-1 " : "hidden"}
            >
              <Link to="/cart">Go To Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard, };
