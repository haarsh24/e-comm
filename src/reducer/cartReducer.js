const cartReducer=(state,dispatch)=>{
    switch (dispatch.type) {
        case "FETCH_PRODUCTS_DATA":
            return {...state, productsData:dispatch.payload}
        case "ADD_TO_CART":
           return {
               ...state,
               cartItem: [...state.cartItem, {
                   ...dispatch.payload,
                   qty: 1
               }]
           }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItem: state.cartItem.filter((item) => item.id !== dispatch.payload.id)
            }
         case "INCREASE_CART_ITEM":
         return {
             ...state,
             cartItem: state.cartItem.map((item) => item.id === dispatch.payload.id ? {
                 ...item,
                 qty: item.qty + 1
             } : item)
         }
        case "DECREASE_CART_ITEM":
            return {
                ...state,
                cartItem: state.cartItem.map((item) => item.id === dispatch.payload.id ? {
                    ...item,
                    qty: item.qty - 1
                } : item)
            }
    
        default:
            state;
    }
}

export {cartReducer}