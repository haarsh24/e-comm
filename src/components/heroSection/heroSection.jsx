import "../styles/main.css";
import {Link} from "react-router-dom"

const HeroSection =()=>{
    return(
        <>
        <div className="container">
        <Link to="/products">

            <div className="product-wrapper flex center p2 front-display-div">
                <div className="product-img-wrapper p2 ">
                    <img className="landing-page-img" src="https://raw.githubusercontent.com/haarsh24/assets/main/sneaker-15.gif" alt="sneaker-image" />
                </div>
                <div className="product-detail-wrapper p2 ">
                    <div className=" index-title ">
                        <p>Shop the best collection of sneakers ever. </p>
                    </div>

                    <div className="product-summary h4 ">
                        The Latest & Greatest Sneakers .Free shipping on your first order. Beautifully crafted
                        collection.
                        No questions asked returns. </div>
                    <div className="m2">
                        <button className="btn h4 p2">
                            <Link to="/products"> Shop Now</Link>
                           </button>
                    </div>
                </div>
            </div>
            </Link>
    </div>

        </>
    )
}
export {HeroSection}