const cartReducer=(state,dispatch)=>{
    switch (dispatch.type) {
        case "FETCH_PRODUCTS_DATA":
            return {...state, productsData:dispatch.payload}
    
        default:
            state;
    }
}

export {cartReducer}