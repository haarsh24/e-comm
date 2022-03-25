import "../styles/main.css";

const ProductCard = (props)=>{
    const item = props.singleProduct;
    console.log(item);

    return(
        <>
        <div className="product-collection item  ">
            <div className="collection-detail flex-column card-container p1 m2">
                <img className=" product-img " src={item.image} />

                <div className="product-collection-detail p1 flex-column">
                    <div className="product-summary h5">
                       {item.title}
                    </div>
                    <div className="product-price price-title flex h5 m-tb-1">
                        ₹ {item.price}
                        <i className="fa fa-heart-o "></i>
                    </div>
                    <button className="btn btn-add-to-cart  mb-1">
                        Add to Cart
                    </button>

                </div>
            </div>

        </div>
        </>
    )
}

export {ProductCard}