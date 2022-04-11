import { calculateTotalPrice } from "../../utilities/checkoutPriceCalc";
import { useCart } from "../../contexts/cart-context";
import { useEffect } from "react";

const CheckoutCard = () => {
  const {
    cartState: { cartItem },
  } = useCart();

  const totalPrice = calculateTotalPrice(cartItem);
  console.log(totalPrice);
  //
  const price = totalPrice.sum;
  console.log(price);
  const finalPrice = price + 700;
  console.log(cartItem.length);
  return (
    <>
      {cartItem.length === 0 ? (
        <h2 className="heading"> Please Add Items in the Cart</h2>
      ) : (
        <div className="order-details-wrapper  m1">
          <div className="order-detail card-container p2 m-tb-1 ">
            <div className="h2">Price Detail</div>

            <div className="price-details flex space-between m-tb-1 ">
              <div className="h4">Price</div>
              <div className="h4">₹ {price}</div>
            </div>
            <div className=" flex space-between">
              <div className="h4 ">Deliver charges</div>
              <div className="h4">₹ 700</div>
            </div>

            <div className=" flex space-between m-tb-1 ">
              <div className="h4">Total amount</div>
              <div className="h4">₹ {finalPrice}</div>
            </div>

            <div className="h5 m-tb-1">
              This Sneaker will Look Awesome on You .
            </div>
            <button className=" h4  btn btn-add-to-cart m-tb-1 p2 ">
              Place Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export { CheckoutCard };
