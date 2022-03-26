import "../styles/main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <>
         <div className="header">
        <div className="bars">
            <h2> <Link className="logo" to="/index">SneakerXclub</Link> </h2>

           
        </div>
        <input className="input-text input-search" placeholder="Search" />
        <div className="nav-icon">
            <Link to="/login" className="h3 p1"> Login</Link>
            <Link to="/wishlist"> <i className="fa fa-heart-o fa-2x " aria-hidden="true"></i></Link>
            <Link to="/cart"><i className="fa fa-shopping-cart fa-2x p1 " aria-hidden="true"></i></Link>
            <Link to="/login"> <i className="fa fa-user-o fa-2x " aria-hidden="true"></i></Link>
        </div>
    </div>
        </>
    )
}


export {Navbar}