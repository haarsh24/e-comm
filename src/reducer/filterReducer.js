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
        default:
            return state;
    }
}
export {filterReducer};
