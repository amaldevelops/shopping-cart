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
const itemTest = ["Pixel9", "Android Tablet", "Walkie Talkie"];
const itemTest2 = [{ Pixel9: 10 }, { AndroidTablet: 10 }, { WalkieTalkie: 4 }];

function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useOutletContext();
  console.log(shoppingCart);

  function clearCart() {
    // console.log(shoppingCart)

    setShoppingCart({ ...shoppingCart, itemName: "", itemPrice: "" });
  }

  function updateCart() {
    setShoppingCart({ ...shoppingCart, itemName: "Pixel 9", itemPrice: 1000 });

    total = <h3>Total: Aud</h3>;
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
            {itemTest.map((itemTests) => {
              return <li key={itemTests}>{itemTests}</li>;
            })}
          </ListsUl>
          {total}
        </div>

        {/* <p>
          <strong>{shoppingCart["itemName"]} : </strong>3 x{" "}
          <span>{shoppingCart["itemPrice"]} </span>
          <span>=Aud50</span>
        </p> */}
        {/* <h3>Total: Aud</h3> */}

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
