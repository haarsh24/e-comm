import { Filters } from "../../components/filters/filters"
import { ProductCard } from "../../components/product-card/product-card"
import { useCart } from "../../contexts/cart-context";
import { Navbar } from "../../components/navbar/navbar";
import { FilterFunction } from "../../utilities/filterFunction";
import { Footer } from "../../components/footer/footer";

const ProductsList = () =>{
    const {cartState} = useCart();
    const product = cartState.productsData;
    const {  cartState: { productsData }, filterState: { sort,priceRange, rating,category} } = useCart()
    const data = FilterFunction(productsData, sort,priceRange,rating,category)

    return(
        <>
        <div className="product-list">
        <div className="filters-container">
        <Filters  /></div>
        <div className="product">
        {data.map((item)=><ProductCard singleProduct={item} />)
        }
        </div>
        
        </div>
        <Footer/>
        </>
    )
}

export {ProductsList}