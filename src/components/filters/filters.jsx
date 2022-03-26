import "../styles/main.css"

const Filters = ()=>{
    return(
        <>
        <aside className="filters-wrapper  flex-column p1">
            <form className="drawer flex-column" action="">
                <div className="heading h2">
                    Filters
                </div>
                <label className=" h3 m1" for="">Select Price</label>  
                
                    <div>
                        <label className="p1 h5"> Price Above ₹ 20,000 </label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label className="p1 h5">Price Above ₹ 30,000 </label>
                        <input type="checkbox" />
                    </div>
                
                <label className="m1 h3">Ratings</label>
                <div>
                    <label className="p1 h5">5 Stars and above</label>
                    <input type="radio" value="Running" />
                </div>
                <div>
                    <label className="p1 h5">4 Stars and above</label>
                    <input type="radio" value="Running" />
                </div>
                <div>
                    <label className="p1 h5">3 Stars and above</label>
                    <input type="radio" value="Running" />
                </div>
                <label className="m1 h3">Sort by</label>
                <div>
                    <label className="p1 h5">Price Low to High</label>
                    <input type="radio" value="Running" />
                </div>
                <div>
                    <label className="p1 h5">Price High to Low</label>
                    <input type="radio" value="Running" />
                </div>
            </form>
        </aside>
        </>
    )
}

export {Filters}