import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Navigation from "../Navigation/Navigation";
import ShopItems from "./ShopItems/ShopItems";

function Shop() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [
      { itemName: "Pixel 9 Phone", itemPrice: 900, quantity: 10 },
      { itemName: "Pixel 15 Phone", itemPrice: 1000, quantity: 1 },
      {
        itemName: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        itemPrice: 109,
        quantity: 1000,
      },
    ],
    summary: { cartQuantity: 10, CartTotal: 5642 },
  }

    // { itemName: "Item Name", itemPrice: "$0", quantity: 0, totalItemPrice: 0 },
  );

  return (
    <div>
      <Navigation shoppingCart={shoppingCart}/>
      <Outlet context={[shoppingCart, setShoppingCart]} />
      <ShopItems itemSearchTerm={10} setShoppingCart={setShoppingCart}/>
      <ShopItems itemSearchTerm={11} />
      <ShopItems itemSearchTerm={12} />
      <ShopItems itemSearchTerm={13} />
      <ShopItems itemSearchTerm={14} />
    </div>
  );
}

export default Shop;
