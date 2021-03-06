import "./App.css";
import { Login } from "./pages/login/login";
import { Signup } from "./pages/signup/signup";
import { Homepage } from "./pages/homepage/homepage";
import {ProductsList} from "./pages/products-list/products-list"
import {Wishlist} from "./pages/wishlist/wishlist"
import {Routes, Route} from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Cart } from "./pages/cart/cart";
import {AddressModal} from "./components/addressModal/addressModal"
import { SingleProduct } from "./components/singleProduct/singleProduct";


import { ScrollTop } from "./components/scrollToTop/scrollToTop";
import { Toast } from "./components/toast/toast";
import { PrivateRoute } from "./components/privateRoute/privateRoute";

function App() {
  return (
    <div className="App">
     <ScrollTop/>
      <Navbar />
  <Toast />
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/products" element={ <ProductsList/> }/>
        <Route path="/" element={<PrivateRoute/>}>
          <Route path="/wishlist" element={  <Wishlist/> } />
          <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<AddressModal />} />
        </Route>
     </Routes>
    
    </div>
  );
}

export default App;
