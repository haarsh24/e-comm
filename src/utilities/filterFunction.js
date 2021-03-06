const FilterFunction = (productsData, sort, priceRange, rating, category, search) => {
    let filteredProducts = productsData;

    if (sort) {
        filteredProducts = filteredProducts.sort((a, b) => sort=== "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price)
        console.log(filteredProducts);
    }
    if (priceRange) {
        filteredProducts = filteredProducts.filter(item => Number(item.price) <= priceRange)
    }
    if(rating){
        filteredProducts = filteredProducts.filter(item => item.rating >= rating)
    }
    if (category.length !== 0) {
        filteredProducts = filteredProducts.filter((item => category.includes(item.category)))
    }
    if (search) {
        filteredProducts = filteredProducts.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }

    return filteredProducts;
};

export { FilterFunction };