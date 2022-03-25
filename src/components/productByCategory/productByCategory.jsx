import "../styles/main.css"
import {Link} from "react-router-dom"

const ProductByCategory =()=>{
    return(
        <>
         <div className="products-collections-container container ">
            <div className="product-collection flex-row-center m2 ">
                <Link to="/products">
                <div className="product-collection flex-row-center  m2 ">
                    <div className="collection-detail flex-row  card-container">
                        <img className=" collection-img" src="https://raw.githubusercontent.com/haarsh24/assets/main/9.webp" />

                        <div className="product-collection-detail p2 flex-column">
                            <div className="h4">
                                NEW ARRIVAL
                            </div>
                            <div className="title h2">
                                Shop greatest collection
                            </div>
                            <div className="h5">
                                Check out the greatest collection of Sneakers.
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                <Link to="/products">
                <div className="product-collection flex-row-center  m2">
                    <div className="collection-detail flex-row  card-container ">
                        <img className=" collection-img " src="https://raw.githubusercontent.com/haarsh24/assets/main/7.webp" />

                        <div className="product-collection-detail p2 flex-column ">
                            <div className="h4">
                                NEW ARRIVAL
                            </div>
                            <div className="title h2">
                                Shop newest collection
                            </div>
                            <div className="h5">
                                Check out the greatest collection of Sneakers.
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