import axios from "axios"
import { toast } from "react-toastify";
const getRequestDataFromServer = async (url, dispatch) => {
    try {

        const {
            data: {
                products
            }
        } = await axios.get(url)
        dispatch({
            type: "FETCH_PRODUCTS_DATA",
            payload: products
        })

    } catch {
        console.log(error);
    }
}

const updateCartItem = async (data, token) => {
    try {
        const res = await axios.post("/api/user/cart", {
            product: {
                ...data,
            }
        }, {
            headers: {
                authorization: token
            }
        })
        toast.success(<p>Item added in cart</p>);
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))
        

    } catch (error) {
        toast.error("Failed to add Item in cart")
    }
}
const RemoveFromCart = async (data, token) => {
    try {
        const res = await axios.delete(`/api/user/cart/${data._id}`, {
            headers: {
                authorization: token
            }
        })
        toast.info("Item removed from cart ")
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))
        }
        catch {
        toast.errot("Failed to remove item from cart")
        }
    
}

const IncreaseCartQuantity = async (data, token) => {
    
    try {
        const res = await axios.post(`/api/user/cart/${data._id}`, {
            action: {
                type: "increment"
            }
        }, {
            headers: {
                authorization: token
            }
        })
        toast.success("Cart Quantity increased")
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))

    } catch (error) {
        toast.error("Failed to increase cart Quantity")

    }
}

const DecreaseCartQuantity = async (data, token) => {
    try {
        
        const res = await axios.post(`/api/user/cart/${data._id}`, {
            action: {
                type: "decrement"
            }
        }, {
            headers: {
                authorization: token
            }
        })
        toast.success("Cart Quantity deccreased")
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))

    } catch (error) {
        toast.error("Failed to decrease cart Quantity")
    }
}

const updateWishlistItem = async (data, token) => {
    try {
         const res = await axios.post("/api/user/wishlist", {
             product: {
                 ...data,
             }
         }, {
             headers: {
                 authorization: token
             }
         })
         toast.success("Item added in wishlist")
         const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
         dataToUpdate.wishlist = [...res.data.wishlist]
         localStorage.setItem('userData', JSON.stringify(dataToUpdate))
         
    }
    catch {
        toast.error("Failed to add item in wishlist")
    }

}
const RemoveFromWishlist = async (data, token) => {
}

export {
    getRequestDataFromServer,
    updateCartItem,
    IncreaseCartQuantity,
    DecreaseCartQuantity,
    RemoveFromCart,
    updateWishlistItem,
    RemoveFromWishlist
}