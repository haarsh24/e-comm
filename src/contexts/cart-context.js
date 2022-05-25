import React, {
  useContext,
  createContext,
  useState,
  useReducer,
  useEffect
} from 'react'
import {
  cartReducer
} from '../reducer/cartReducer';
import {
  getRequestDataFromServer
} from '../utilities/helpers/api-calls-helper'
import {
  filterReducer
} from "../reducer/filterReducer";

import { useAuth
} from './authContext';
import {
  wishlistReducer
} from '../reducer/wishlistReducer';

const CartContext = createContext();

const CartProvider = ({
  children
}) => {


  const {
    cart,
    wishlist
  } = JSON.parse(localStorage.getItem("userData")) || {
    cart: [],
    wishlist: []
  }

  const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
    wishlistItem: wishlist
  });
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    productsData: [],
    cartItem: cart
  })

  useEffect(() => {
    // fetchData()
    getRequestDataFromServer("/api/products", cartDispatch)

  }, [])

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    priceRange: 12000,
    rating: 3,
    category: "",
    search:""
  });
  //  console.log("product data ", cartState.productsData);
  return (
    <CartContext.Provider value={
      {
       
        cartState,
        cartDispatch,
        filterState,
        filterDispatch,
        wishlistState,
        wishlistDispatch
      }
    } >
      {children}
      </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export {
  useCart,
  CartProvider
}