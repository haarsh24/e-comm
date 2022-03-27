import { CartCard } from "../../components/cartCard/cartCard";
import { CheckoutCard } from "../../components/checkoutCard/checkoutCard";
import { useCart } from "../../contexts/cart-context";

const Cart = () => {
  const { cartState:{ cartItem, productsData }}= useCart();

  return (
    <>
      <div className=" flex space-around">
        <div class="cart-wrapper ">
         
            {cartItem.map(props =>  <CartCard item={props} key={props._id} />)}
                </div>
        <CheckoutCard />
      </div>
    </>
  );
};

export  {Cart} ;
