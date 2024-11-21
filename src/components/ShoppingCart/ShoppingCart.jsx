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

const itemTest2 = {
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
};

function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useOutletContext();
  console.log(shoppingCart);

  function clearCart() {
    setShoppingCart({ items: [], summary: { cartQuantity: 0, CartTotal: 0 } });
  }

  function updateCart() {
    // let newShoppingCart = {
    //   items: [
    //     { itemName: "Pixel 9 Phone", itemPrice: 900, quantity: 10 },
    //     { itemName: "Pixel 15 Phone", itemPrice: 1000, quantity: 1 },
    //     {
    //       itemName: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    //       itemPrice: 109,
    //       quantity: 1000,
    //     },
    //   ],
    //   summary: { cartQuantity: 10, CartTotal: 5642 },
    // };

    let newItem = { itemName: "Moto G Phone", itemPrice: 400, quantity: 3 };

    setShoppingCart({
      items: [newItem],
      summary: { cartQuantity: 1, CartTotal: 3 },
    });
  }

  if (shoppingCart === undefined || shoppingCart[1] === null) {
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

        <button type="button" onClick={updateCart}>
          Checkout
        </button>
        <button type="button" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    );
  }
}

export default ShoppingCart;
