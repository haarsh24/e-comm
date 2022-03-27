import axios from "axios"

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

const updateCartItem = async (item, token) => {
    try {
        const res = await axios.post("/api/user/cart", {
            product: {
                ...item,
            }
        }, {
            headers: {
                authorization: token
            }
        })
        console.log(res);
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))
        console.log(dataToUpdate);

    } catch (error) {
        console.log(error)
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

        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))

    } catch (error) {
        console.log(error);

    }
}

const decreaseCartQuantity = async (data, token) => {
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

        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))

    } catch (error) {
        console.log(error);
    }
}
export {
    getRequestDataFromServer,
    updateCartItem,
    IncreaseCartQuantity,
    decreaseCartQuantity
}