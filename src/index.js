import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {CartProvider} from "./contexts/cart-context";
import {BrowserRouter} from "react-router-dom"
import { AuthProvider } from "./contexts/authContext";
// Call make Server
makeServer();

ReactDOM.render(
  <AuthProvider >
    <React.StrictMode>
     <CartProvider>
       <BrowserRouter>
        <App />
       </BrowserRouter>
     </CartProvider>
   </React.StrictMode>
  </AuthProvider >
  ,
  document.getElementById("root")
);
