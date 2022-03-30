import { useCart } from "../../contexts/cart-context";
import { WishlistItem } from "../../components/wishlist-item/wishlist-item";

const Wishlist = () => {
  const {
    wishlistState: { wishlistItem },
  } = useCart();
  console.log(wishlistItem);
  return (
    <>
      <div className="wishlist-container">
        {wishlistItem.length === 0 ? (
          <div className="heading h2 wishlist-heading">No Items in the Wishlist</div>
        ) : (
          wishlistItem.map((props) => (
            <div className="flex-column wishlist-product">
              <div className="product">
                <WishlistItem item={props} key={props._id} />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export { Wishlist };
