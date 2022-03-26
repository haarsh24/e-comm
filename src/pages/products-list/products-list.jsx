import { Filters } from "../../components/filters/filters"
import { ProductCard } from "../../components/product-card/product-card"
import { useCart } from "../../contexts/cart-context"
const ProductsList = () =>{
    const {cartState} = useCart();
    const product = cartState.productsData;
    console.log(cartState);
    return(
        <>
        <div className="product-list">
        <Filters/>
        {product.map((item)=><ProductCard singleProduct={item} />)
        }
        </div>
        </>
    )
}

export {ProductsList}