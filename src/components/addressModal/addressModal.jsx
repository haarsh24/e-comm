import { calculateTotalPrice } from "../../utilities/checkoutPriceCalc";
import { useCart } from "../../contexts/cart-context";
import { useNavigate } from "react-router-dom";

const loadScript = (src) => {
   
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
const AddressModal = () => {
    const { cart ,cartDispatch} = useCart();
    
    const navigate = useNavigate();
    const {
        cartState: { cartItem },
      } = useCart();
    
    const totalPrice = calculateTotalPrice(cartItem);
    const price = totalPrice.sum;
    const finalPrice = price + 700;

    const displayRazorpay = async (e) => {
        e.preventDefault();
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if (!res) {
            alert('razor pay sdk failed')
            return
        }
        const options = {
            key: "rzp_test_DPqaCePZc7d50E",
            amount: finalPrice.toFixed(2) * 100,
            currency: "INR",
            name: "Sneaker X Club",
            description: "Shop Awesome Sneaker",
            handler: ({ razorpay_payment_id }) => { 
                cartDispatch({type:"INITIAL_CART",payload:[]})
                navigate("/")
            },
            prefill: {
                name: "Harsh",
                email: "har@gfhg.dd",
            },
            theme: {
                "color": "#6e54c4"
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div id="login-container" className=" auth login-container address-modal p-2">
            <form className="form input-form card-container p2" onSubmit={displayRazorpay}>
            
                <div className="flex flex-between m2">
                <div className="heading ">
                    <p>CONTACT DETAILS </p>
                    </div>
                    
                </div>
                <label className="ml-2" htmlFor="name">Email </label>
                <input className="input-text" type="email" placeholder="Email" required />
                <label className="ml-2" htmlFor="mobile"> Name</label>
                <input className="input-text " type="name" placeholder="Mobile" required
                />
                <div className="heading ">
                    <p>ADDRESS</p>
                </div>

                <label className="ml-2" htmlFor="pincode" > Pincode </label>
                <input className="input-text " placeholder="Enter your Pincode" required/>
            
                <label className="ml-2" htmlFor="address"> Address (HouseNo , Building , Street) </label>
                <input className="input-text "placeholder="Enter your Address" required/>
                
                <label className="ml-2" htmlFor="city"> City / District </label>
                <input className="input-text "  required placeholder="Enter your City / District" />
            
                <label className="ml-2" htmlFor="State"> City / District </label>
                <input className="input-text " required placeholder="State" />
                <div className="pay-btn">
                <button className=" h4  btn btn-add-to-cart m-tb-1 p2">ORDER </button>
                </div>
            </form>
            
        </div>
    )
}

export {AddressModal}