import { useCart } from "../../contexts/cart-context";
import { ProductCard } from "../product-card/product-card";
import { FilterFunction } from "../../utilities/filterFunction";

const NewArrival = () => {
 
    const { cartState } = useCart();
    const product = cartState.productsData;
    const {
      cartState: { productsData },
      filterState: { sort, priceRange, rating, category, search },
    } = useCart();
    // const products = cartState.productsData;
    // console.log(products);
    const data = FilterFunction(productsData, sort, priceRange, rating, category,search);
    const newArrival = data.filter(item => item.newArrival === true);
    
    return (
        <>
            <section className="new-arrival-wrapper">
                 <div className="heading m2"> New Arrival</div>
                    <div className="flex p2 new-arrival" v>
                    {newArrival.map((item) => (
                        <ProductCard singleProduct={item} />
          ))}
                        </div>
                       
            </section>
        </>
    )
}

export {NewArrival}