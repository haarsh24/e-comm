import "../styles/main.css";

const FeaturedProducts = (props)=>{
   // console.log(props);
   const {item}= props; 
   return(
<>

    <div className="products-wrapper ">
        <div className="product-collection item  ">
            <div className="collection-detail flex-column card-container p1 m2">
                <img className=" product-img " src="" />

                <div className="product-collection-detail p1 flex-column">
                    <div className="product-summary h5">
                       
                    </div>
                    <div className="product-price price-title flex h5 m-tb-1">
                        ₹ 
                        <i className="fa fa-heart-o "></i>
                    </div>
                    <button className="btn btn-add-to-cart  mb-1">
                        Add to Cart
                    </button>

                </div>
            </div>

        </div>
        {/* <div className="product-collection item ">
            <div className="flex-column card-container p1 m2">
                <img className=" product-img " src={sneaker1} />

                <div className="product-collection-detail p1 flex-column">
                    <div className="product-summary h5">
                        Nike React Retro
                    </div>
                    <div className="product-price price-title flex h5 m-tb-1">
                        ₹ 10,000
                        <i className="fa fa-heart-o "></i>
                    </div>
                    <button className="btn btn-add-to-cart  mb-1">
                        Add to Cart
                    </button>

                </div>
            </div>

        </div>
        <a href="./pages/product.html">
        <div className="product-collection item ">
            <div className="collection-detail flex-column card-container p1 m2">
                <img className=" product-img " src={sneaker1} />

                <div className="product-collection-detail p1 flex-column">
                    <div className="product-summary h5">
                        Nike Air Pro Max
                    </div>
                    <div className="product-price price-title flex h5 m-tb-1">
                        ₹ 25,000
                        <i className="fa fa-heart-o "></i>
                    </div>
                    <button className="btn btn-add-to-cart  mb-1">
                        Add to Cart
                    </button>

                </div>
            </div>

        </div>
        </a>
        <div className="product-collection item ">
            <div className="collection-detail flex-column card-container p1 m2">
                <img className=" product-img " src={sneaker1} />

                <div className="product-collection-detail p1 flex-column">
                    <div className="product-summary h5">
                        Nike Jordan Air
                    </div>
                    <div className="product-price price-title flex h5 m-tb-1">
                        ₹ 40,000
                        <i className="fa fa-heart-o "></i>
                    </div>
                    <button className="btn btn-add-to-cart  mb-1">
                        Add to Cart
                    </button>

                </div>
            </div>

        </div> */}

    </div>

        </>
    )

}

export {FeaturedProducts}