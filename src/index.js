import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {CartProvider} from "./contexts/cart-context";
import {BrowserRouter} from "react-router-dom"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
