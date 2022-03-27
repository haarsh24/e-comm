import "../styles/main.css";
import {useAuth} from "../../contexts/authContext"
import { useNavigate } from "react-router-dom";
import {useCart} from "../../contexts/cart-context"
import {updateCartItem} from "../../utilities/helpers/api-calls-helper"

const ProductCard = (props)=>{
    const item = props.singleProduct;
    console.log(item);
    const navigate = useNavigate();
    const {authState:{isLogin, token}}= useAuth();
    const {cartDispatch} = useCart();

    const addToCardHandler=()=>{
       if(isLogin){
        console.log("logged in ")
             cartDispatch({type:"ADD_TO_CART", payload:item})
             updateCartItem(item,token);
       }else{       
       navigate("/login") 
       }
    }

    return(
        <>
        <div className="product-collection item  ">
            <div className="collection-detail flex-column card-container p1 m2">
                <div className="product-rating  ">{item.rating}⭐</div>
                <img className=" product-img " src={item.image} />

                <div className="product-collection-detail p1 flex-column">
                    <div className="product-summary h5">
                       {item.title}
                    </div>
                    <div className="product-price price-title flex h4 m-tb-1">
                        ₹ {item.price}
                        <i className="fa fa-heart-o "></i>
                    </div>
                    <button className="btn btn-add-to-cart  mb-1" onClick={addToCardHandler} >
                        Add to Cart
                    </button>

                </div>
            </div>

        </div>
        </>
    )
}

export {ProductCard}