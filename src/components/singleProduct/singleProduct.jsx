import { useParams } from "react-router-dom";
import "../styles/main.css";
import { useAuth } from "../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cart-context";
import { updateCartItem, updateWishlistItem,  RemoveFromWishlist} from "../../utilities/helpers/api-calls-helper";
import { useState } from "react";
    
const SingleProduct = () => {
    const [cartClicked, setCartClicked] = useState(false)
    const [wishlistClicked,setWishlistClicked] = useState(false)
  
  const navigate = useNavigate();
  const {
    authState: { isLogin, token },
  } = useAuth();
    
  const { productId } = useParams();
    const { cartState, cartDispatch, cartItem, wishlistItem, wishlistDispatch } = useCart();
    const product = cartState.productsData.find(item => item._id === productId);


  const addToCardHandler = () => {
    setCartClicked(true);
    if (isLogin) {
      
      cartDispatch({ type: "ADD_TO_CART", payload: product });
      updateCartItem(product, token);
    } else {
      navigate("/login");
    }
  };
    const WishlistHandler = () => {   
        setWishlistClicked(true)
    if (isLogin) {
                wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
                updateWishlistItem(product, token);
        
            
    } else {
      navigate("/login");
    }
  };

   
    return (
        <>
           <div className="product-wrapper flex-row-center ">
            <div className="product-img-wrapper p2 ">
                <img className="single-product-img " src={product.image} alt="sneaker-image" />
            </div>
            <div className="product-detail-wrapper p2">
                <div className=" product-title ">
                        <p>{product.title}</p>
                </div>
                <div className="product-price h1">
                    ₹ {product.price}
                </div>
                <div className="product-summary h4 ">
                    {product.description}
                </div>
                
              
                <button
              className={cartClicked ? "hidden" : "btn btn-add-to-cart h4  mb-1"}
              onClick={addToCardHandler}
            >
              Add to Cart
            </button>
            <button
              className={cartClicked ? "btn btn-add-to-cart h4 mb-1 " : "hidden"}
            >
              <Link to="/cart">Go To Cart</Link>
                    </button>
                    <button
              className={wishlistClicked ? "hidden" : "btn secondary h4 btn-add-to-cart"}
              onClick={WishlistHandler}
            >
              Add to Wishlist
            </button>
            <button
              className={wishlistClicked ? "btn secondary h4 btn-add-to-cart " : "hidden"}
            >
              <Link to="/wishlist">Go To wishlist</Link>
            </button>
                    
                        </div>
                        </div>
                
        </>
    )
}

export { SingleProduct }
