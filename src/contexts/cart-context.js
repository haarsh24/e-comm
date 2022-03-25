import React, { useContext, createContext, useState, useReducer, useEffect } from 'react'
import { cartReducer } from '../reducer/cartReducer';
import { getRequestDataFromServer } from '../utilities/helpers/api-calls-helper'

const CartContext = createContext();

const CartProvider = ({ children }) => {
 
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    productsData: [],
    cartItem: []
  })

  useEffect(() => {
    // fetchData()
    getRequestDataFromServer("/api/products", cartDispatch)

  }, [])


  console.log("product data ", cartState.productsData);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch}}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext);

export { useCart, CartProvider }