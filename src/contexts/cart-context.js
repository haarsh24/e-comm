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
const CartContext = createContext();

const CartProvider = ({
  children
}) => {

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    productsData: [],
    cartItem: []
  })

  useEffect(() => {
    // fetchData()
    getRequestDataFromServer("/api/products", cartDispatch)

  }, [])

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    priceRange: 12000,
    rating: 3,
    category:""
  });
  console.log("product data ", cartState.productsData);
  return ( 
    < CartContext.Provider value = {
      {
        cartState,
        cartDispatch,
        filterState,
        filterDispatch,

      }
    } > {
      children
    } 
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export {
  useCart,
  CartProvider
}