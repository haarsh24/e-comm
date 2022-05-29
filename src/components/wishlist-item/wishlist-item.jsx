
import { useAuth } from "../../contexts/authContext";
import { useCart } from "../../contexts/cart-context";
import {
  RemoveFromWishlist,
  updateCartItem,
} from "../../utilities/helpers/api-calls-helper";
import toast from "react-hot-toast";
const WishlistItem = (props) => {
      const {
        authState: { token },
      } = useAuth();
    const { wishlistDispatch, cartDispatch , cartState:{cartItem}} = useCart();
    
  console.log(props);

    const item = props.item;
    const removeFromWishlistHandler = () => {
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
        RemoveFromWishlist(item,token)
    }
    const addToCardHandler = () => {
      if (cartItem.find(data => data.id === item.id)) {
        toast.error("Item already present in Cart")
      } else {
        cartDispatch({ type: "ADD_TO_CART", payload: item });
        updateCartItem(item, token);
      }
      } 
    
  return (
    <>
      <div className="product-collection item  ">
        <div className="collection-detail flex-column card-container p1 m2">
          <div className="product-rating  ">{item.rating}⭐</div>
          <img className=" product-img " src={item.image} />

          <div className="product-collection-detail p1 flex-column">
            <div className="product-summary h5">{item.title}</div>
            <div className="product-price price-title flex h4 m-tb-1">
              ₹ {item.price}
              <button
                onClick={removeFromWishlistHandler}
                className=" btn btn-wishlist btn-wishlist-clicked"
              >
                <i className="fa fa-heart-o "></i>
              </button>
            </div>
            <button
              className="btn btn-add-to-cart  mb-1"
              onClick={addToCardHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { WishlistItem };
