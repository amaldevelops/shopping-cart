import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Navigation from "../Navigation/Navigation";
import ShopItems from "./ShopItems/ShopItems";

function Shop() {
  const [shoppingCart, setShoppingCart] = useState({
    items: [

    ],
    summary: { cartQuantity: 0, CartTotal: 0 },
  });

  function updateCartAddItem(itemInfo) {
    // Create a new array with the new item added
    const updatedItems = [
      ...shoppingCart.items,
      itemInfo,
      // Add new item
    ];

    // Calculate the updated cart summary
    const totalQuantity = updatedItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const totalCost = updatedItems.reduce(
      (sum, items) => sum + items.itemPrice * items.quantity,
      0
    );

    // Update the shopping cart state
    setShoppingCart({
      items: updatedItems,
      summary: { cartQuantity: totalQuantity, CartTotal: totalCost },
    });
  }

  // function updateCartRemoveItem(itemInfo) {
  //   // Create a new array with the new item added
  //   const updatedItems = [
  //     ...shoppingCart.items,
  //     itemInfo,
  //     // Add new item
  //   ];

  //   // Calculate the updated cart summary
  //   const totalQuantity = updatedItems.reduce(
  //     (sum, item) => sum - item.quantity,
  //     0
  //   );
  //   const totalCost = updatedItems.reduce(
  //     (sum, items) => sum - items.itemPrice * items.quantity,
  //     0
  //   );

  //   // Update the shopping cart state
  //   setShoppingCart({
  //     items: updatedItems,
  //     summary: { cartQuantity: totalQuantity, CartTotal: totalCost },
  //   });
  // }

  function updateCartRemoveItem(itemInfo) {
    // Filter out the item to remove
    const updatedItems = shoppingCart.items.filter(
      (item) => item.itemName !== itemInfo.itemName
    );
  
    // Calculate the updated cart summary
    const totalQuantity = updatedItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const totalCost = updatedItems.reduce(
      (sum, item) => sum + item.itemPrice * item.quantity,
      0
    );
  
    // Update the shopping cart state
    setShoppingCart({
      items: updatedItems,
      summary: { cartQuantity: totalQuantity, CartTotal: totalCost },
    });
  }
  

  return (
    <div>
      <Navigation shoppingCart={shoppingCart} />
      <Outlet context={[shoppingCart, setShoppingCart]} />
      <ShopItems
        itemSearchTerm={10}
        updateCartAddItem={updateCartAddItem}
        updateCartRemoveItem={updateCartRemoveItem}
      />
      <ShopItems
        itemSearchTerm={11}
        updateCartAddItem={updateCartAddItem}
        updateCartRemoveItem={updateCartRemoveItem}
      />
      <ShopItems
        itemSearchTerm={12}
        updateCartAddItem={updateCartAddItem}
        updateCartRemoveItem={updateCartRemoveItem}
      />
      <ShopItems
        itemSearchTerm={13}
        updateCartAddItem={updateCartAddItem}
        updateCartRemoveItem={updateCartRemoveItem}
      />
      <ShopItems
        itemSearchTerm={14}
        updateCartAddItem={updateCartAddItem}
        updateCartRemoveItem={updateCartRemoveItem}
      />
    </div>
  );
}

export default Shop;
