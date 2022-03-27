import { CartCard } from "../../components/cartCard/cartCard";
import { CheckoutCard } from "../../components/checkoutCard/checkoutCard";
import { useCart } from "../../contexts/cart-context";

const Cart = () => {
  const { cartState:{ cartItem }}= useCart();

  return (
    <>
      <div className=" flex space-around">
        <div className="cart-wrapper ">
          {cartItem.map((props) => (
            <CartCard item={props} key={props._id} />
          ))}
        </div>
        <CheckoutCard />
      </div>
    </>
  );
};

export  {Cart} ;
