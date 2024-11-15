import ShoppingCart from "../ShoppingCart/ShoppingCart"
import Navigation from "../Navigation/Navigation"
function Shop()
{
    return(
        <div>
            <h1>Shop Items</h1>
            {/* <Navigation/> */}
            <ShoppingCart/>
        </div>
    )
}

export default Shop;