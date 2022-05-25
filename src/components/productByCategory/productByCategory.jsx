import "../styles/main.css"
import {Link} from "react-router-dom"
import { useCart } from "../../contexts/cart-context"

const ProductByCategory = () => {
    const { filterDispatch } = useCart();
    
    const categoryHandler = (category) => {
        filterDispatch({ type: "CATEGORY", payload: category })
    }
    return(
        <>
         <div className="products-collections-container container ">
            <div className="product-collection flex-row-center m2 ">
                    <Link to="/products"
                    onClick={() => categoryHandler("sneakers")}
                    >
                <div className="product-collection flex-row-center  m2 ">
                    <div className="collection-detail flex-row  card-container">
                        <img className=" collection-img" src="https://raw.githubusercontent.com/haarsh24/assets/main/9.webp" />

                        <div className="product-collection-detail p2 flex-column">
                            <div className="h4">
                                Winter collection
                            </div>
                            <div className="title h2">
                               Sneakers
                            </div>
                            <div className="h5">
                                Comfortable and stylish collection of Sneakers.
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                    <Link to="/products"
                        onClick={() => categoryHandler("running")} >
                <div className="product-collection flex-row-center  m2">
                    <div className="collection-detail flex-row  card-container ">
                        <img className=" collection-img " src="https://raw.githubusercontent.com/haarsh24/assets/main/7.webp" />

                        <div className="product-collection-detail p2 flex-column ">
                            <div className="h4">
                                New Arrival
                            </div>
                            <div className="title h2">
                                Running Shoes
                            </div>
                            <div className="h5">
                                Check out the greatest collection of Running shoes.
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export {ProductByCategory}