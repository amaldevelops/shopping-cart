// import { Link } from "react-router-dom";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Navigation from "../Navigation/Navigation";
import ShopItems from "./ShopItems/ShopItems";


function Shop() {
  return (
    <div>
      <ShoppingCart />
      <ShopItems/>
      {/* <h1>Shop Items</h1> */}
    </div>
  );
}

export default Shop;
