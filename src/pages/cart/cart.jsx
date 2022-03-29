import { CartCard } from "../../components/cartCard/cartCard";
import { CheckoutCard } from "../../components/checkoutCard/checkoutCard";
import { useCart } from "../../contexts/cart-context";


const Cart = () => {
  const { cartState:{ cartItem }}= useCart();

  return (
    <>
      {cartItem.length === 0 ?  
          <h2 className="heading"> Please Add Items in the Cart</h2>
        
       
       : (
        <div className=" flex space-around">
          <div className="cart-wrapper ">
            {cartItem.map((props) => (
              <CartCard item={props} key={props._id} />
            ))}
          </div>
          <CheckoutCard />
        </div>
      )}
    </>
  );
};

export  {Cart} ;
