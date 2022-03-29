const filterReducer = (state , action) => {
    switch (action.type) {
        case "SORT":
            return {...state, sort:action.payload};
        case "PRICE_RANGE":
            return {...state, priceRange:action.payload};
        case "RATING":
            return {...state, rating:action.payload};
            case "CATEGORY":
                // console.log(state.selectedCategory);
                return state.category.includes(action.payload)
                    ? {
                        ...state,
                        category:
    
                            [...state.category.filter(item => item !== action.payload)]
    
                    } : { ...state, category: [...state.category, action.payload] }
        case "RESET_ALL_FILTERS":
            return {...state, sort:"", priceRange:12000, rating:3, category:[]}
        default:
            return state;
    }
}
export {filterReducer};
