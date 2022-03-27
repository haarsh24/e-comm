const CheckoutCard = () => {
    return (
      <>
        <div className="order-details-wrapper  ">
          <div className="order-detail card-container p2 m-tb-1 ">
            <div className="h2">Price Detail</div>

            <div className="price-details flex space-between m-tb-1 ">
              <div className="h4">Price</div>
              <div className="h4">₹ 70,000</div>
            </div>
            <div className=" flex space-between">
              <div className="h4 ">Deliver charges</div>
              <div className="h4">₹ 700</div>
            </div>

            <div className=" flex space-between m-tb-1 ">
              <div className="h4">Total amount</div>
              <div className="h4">₹ 70,700</div>
            </div>

            <div className="h5 m-tb-1">
              You will receive this product by 22 Feb 2022.
            </div>
            <button className=" h4  btn btn-add-to-cart m-tb-1 p2 ">
              Place Order
            </button>
          </div>
        </div>
      </>
    );
}

export {CheckoutCard}