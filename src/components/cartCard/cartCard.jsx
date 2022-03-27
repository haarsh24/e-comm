import {
  IncreaseCartHandler,
  DecreaseCartQuantity,
} from "../../utilities/helpers/api-calls-helper";
import { useCart, cartDispatch } from "../../contexts/cart-context";
import { useAuth } from "../../contexts/authContext";

const CartCard = (props) => {
    const {
      authState: { token },
    } = useAuth();
  const { cartDispatch } = useCart();
  const data = props.item;

  const increaseCartHandler = () => {
    cartDispatch({ type: "INCREASE_CART_ITEM", payload: data });
    IncreaseCartHandler(data, token);
  };

  const decreaseCartHandler = () => {
    cartDispatch({ type: "DECREASE_CART_ITEM", payload: data });
    DecreaseCartQuantity(data, token);
  };

  return (
    <div className="collection-detail flex-row m2 card-container">
      <img className=" item-product" src={data.image} />
      <div className="product-collection-detail p1 flex-column">
        <div className="product-summary h3">{data.title}</div>
        <div className="product-price flex price-title h5 m-tb-1">
          ₹ {data.price}
        </div>
        <div className="flex h4 ">
          <button className="btn" onClick={decreaseCartHandler}>
            -
          </button>
          <span className="m-tb-1 p1" htmlFor="quantity">
            Quantity :{data.qty}
          </span>
          <button className="btn" onClick={increaseCartHandler}>
            +
          </button>
        </div>

        <button className=" btn btn-add-to-cart  m-tb-1">
          Remove from Cart
        </button>
        <button className="  btn secondary btn-add-to-cart  ">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export { CartCard };
