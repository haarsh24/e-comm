import { useCart } from "../../contexts/cart-context";
import { WishlistItem } from "../../components/wishlist-item/wishlist-item";

const Wishlist = () => {
  const {
    wishlistState: { wishlistItem },
  } = useCart();
  console.log(wishlistItem);
  return (
    <>
      {wishlistItem.length === 0 ? (
        <div className="heading h2">No Items in the Wishlist</div>
      ) : (
        wishlistItem.map((props) => (
          <div className="flex-column wishlist-product">
            <span className="product">
              <WishlistItem item={props} key={props._id} />
            </span>
          </div>
        ))
      )}
    </>
  );
};

export { Wishlist };
