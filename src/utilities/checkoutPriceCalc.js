

const calculateTotalPrice = (cartItem) => {
    return  cartItem.reduce((totalPrice, product) => {
        return {
            sum: (product.price) * (product.qty) + (totalPrice.sum)
        }
       
    }, { sum: 0 })
}

      
export {
    calculateTotalPrice,
    
}