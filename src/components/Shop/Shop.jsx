import ShoppingCart from "../ShoppingCart/ShoppingCart"
import Navigation from "../Navigation/Navigation"
import {Link} from "react-router-dom";

function Shop()
{
    return(
        <div>
            <Link to="Home">Home </Link>
            <h1>Shop Items</h1>
            {/* <Navigation/> */}
            <ShoppingCart/>
        </div>
    )
}

export default Shop;