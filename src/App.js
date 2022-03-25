import "./App.css";
import { Login } from "./components/login/login";
import { Signup } from "./components/signup/signup";
import { Homepage } from "./pages/homepage/homepage";
import {ProductsList} from "./pages/products-list/products-list"
import {Footer} from "./components/footer/footer"
import { Wishlist } from "./components/wishlist-item/wishlist-item";
import { Navbar } from "./components/navbar/navbar";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Homepage/>}/>
       <Route path="/products" element={ <ProductsList/> }/>
       <Route path="/wishlist" element={  <Wishlist/> } />
     </Routes>
    
    </div>
  );
}

export default App;
