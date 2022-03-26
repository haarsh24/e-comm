import { useCart } from "../../contexts/cart-context";
import "../styles/main.css";

const Filters = () => {
  const { filterDispatch, filterState: {  priceRange } } = useCart()
    
  return (
    <>
      <aside className="filters-wrapper  flex-column p1">
        <form className="drawer flex-column" action="">
          <div className="heading h2">Filters</div>
          <label className=" h3 m1" for="">
            Select Category
          </label>

          <div>
            <label className="p1 h5"> Running </label>
            <input type="checkbox" name="category"  onChange={()=> filterDispatch({type:"CATEGORY" , payload:"running"})} />
          </div>
          <div>
            <label className="p1 h5"> Sneakers </label>
            <input type="checkbox" name="category"  onChange={()=> filterDispatch({type:"CATEGORY" , payload:"sneakers"})}/>
          </div>
          <label className=" h3 m1" for="">
            Select Price
          </label>
          <input value={priceRange} type="range" min={2500} max={12000} 
          onChange={(e)=> filterDispatch({type:"PRICE_RANGE" , payload:e.target.value})} />
          
          <label className=" h3 m1" for=""> ₹ {priceRange}</label>
          <label className="m1 h3">Ratings</label>
          <div>
            <label className="p1 h5">5 Stars and above</label>
            <input type="radio" name="rating-radio"  onChange={() => filterDispatch({ type: "RATING", payload: 5 })}
        />
          </div>
          <div>
            <label className="p1 h5">4 Stars and above</label>
            <input type="radio" name="rating-radio"   onChange={() => filterDispatch({ type: "RATING", payload: 4 })}
        />
          </div>
          <div>
            <label className="p1 h5">3 Stars and above</label>
            <input type="radio" name="rating-radio" onChange={() => filterDispatch({ type: "RATING", payload: 3 })}  />
          </div>
          <label className="m1 h3">Sort by</label>
          <div>
            <label className="p1 h5">Price Low to High</label>
            <input
              type="radio"
              name="sort-by-price"
              onChange={() =>
                filterDispatch({ type: "SORT", payload: "LOW_TO_HIGH" })
              }
            />
          </div>
          <div>
            <label className="p1 h5">Price High to Low</label>
            <input
              type="radio"
              name="sort-by-price"
              onChange={() =>
                filterDispatch({ type: "SORT", payload: "HIGH_TO_LOW" })
              }
            />
          </div>
        </form>
      </aside>
    </>
  );
};

export { Filters };
