import "../styles/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = ()=>{
    return(
        <>
         <div className="header">
        <div className="bars">
            <h2> <a className="logo" href="./index.html">SneakerXclub</a> </h2>

           
        </div>
        <input className="input-text input-search" placeholder="Search" />
        <div className="nav-icon">
            <a href="./pages/login.html" className="h3 p1"> Login</a>
            <a href="./pages/wishlist.html"> <i className="fa fa-heart-o fa-2x " aria-hidden="true"></i></a>
            <a href="./pages/cart.html"><i className="fa fa-shopping-cart fa-2x p1 " aria-hidden="true"></i></a>
            <a href="./pages/login.html"> <i className="fa fa-user-o fa-2x " aria-hidden="true"></i></a>
        </div>
    </div>
        </>
    )
}


export {Navbar}