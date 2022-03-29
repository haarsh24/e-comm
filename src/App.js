import "./App.css";
import { Login } from "./pages/login/login";
import { Signup } from "./pages/signup/signup";
import { Homepage } from "./pages/homepage/homepage";
import {ProductsList} from "./pages/products-list/products-list"
import {Wishlist} from "./pages/wishlist/wishlist"
import {Routes, Route} from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Cart } from "./pages/cart/cart";

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/products" element={ <ProductsList/> }/>
       <Route path="/wishlist" element={  <Wishlist/> } />
       <Route path="/login" element={ <Login/> } />
       <Route path="/signup" element={<Signup />} />
       <Route path="/cart" element={<Cart/>} />
     </Routes>
    
    </div>
  );
}

export default App;
