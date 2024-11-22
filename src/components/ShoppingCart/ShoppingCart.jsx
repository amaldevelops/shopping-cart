import styled from "styled-components";
import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

const Heading1 = styled.h1`
  font-size: 2.8em;
  text-align: center;
  color: #bf4f74;
`;

const Heading2 = styled.h2`
  font-size: 1.2em;
  text-align: center;
  color: #bf4f74;
`;

const ListsUl = styled.ul`
  list-style-type: none;
  text-decoration: none;
`;

// let cart = "";
let total;

function ShoppingCart({ cartUpdateProp }) {
  const [shoppingCart, setShoppingCart] = useOutletContext();
  console.log(shoppingCart);

  function clearCart() {
    setShoppingCart({ items: [], summary: { cartQuantity: 0, CartTotal: 0 } });
  }

  let itemName = { cartUpdateProp };
  function updateCart() {
    // Create a new array with the new item added
    const updatedItems = [
      ...shoppingCart.items,
      itemName,
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

  if (shoppingCart === undefined || shoppingCart.items.length === 0) {
    return (
      <div>
        <h1>Empty Cart</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Cart</h1>
          <ListsUl>
            {shoppingCart["items"].map((CartList, index) => {
              return (
                <li key={index}>
                  {CartList.itemName}
                  {"=> "}
                  {"Quantity: "}
                  {CartList.quantity}
                  {" x "}
                  {"Aud "}
                  {CartList.itemPrice} {"Total Aud"}
                  {CartList.quantity * CartList.itemPrice}
                  {CartList.CartTotal}
                </li>
              );
            })}
          </ListsUl>
          <h3>Total Quantity: {shoppingCart["summary"]["cartQuantity"]}</h3>
          <h3>Total Value: Aud {shoppingCart["summary"]["CartTotal"]} </h3>
        </div>

        <button type="button">Checkout</button>
        <button type="button" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
