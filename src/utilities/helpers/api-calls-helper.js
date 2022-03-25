import axios from "axios"

const getRequestDataFromServer = async (url, dispatch) => {
    try {
        
        const { data: { products } } = await axios.get(url)
        dispatch({ type: "FETCH_PRODUCTS_DATA", payload: products })
        
    } catch {
        console.log(error);
    }
}

export {getRequestDataFromServer}