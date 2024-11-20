import styled from "styled-components";
import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

const Heading1 = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: #bf4f74;
`;

function ShoppingCart() {
  const Heading2 = styled.h2`
    font-size: 1.3em;
    text-align: center;
    color: #bf4f74;
  `;
  const [shoppingCart, setShoppingCart] = useOutletContext();
  console.log(shoppingCart);

  function clearCart()
  
  {
    // setShoppingCart(...shoppingCart, shoppingCart[1][{ itemName: "Pixel 9", itemPrice: "$1,000", quantity: 1, totalItemPrice: 1000 }])
  }

  if (shoppingCart === undefined || shoppingCart[1]===null ) {
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
        </div>

        <p>
          <strong>{shoppingCart[1]["itemName"]} : </strong>3 x{" "}
          <span>{shoppingCart[0]["itemPrice"]} </span>
          <span>=Aud50</span>
        </p>
        <h3>Total: Aud</h3>

        <button type="button">Checkout</button>
        <button type="button" onClick={clearCart}>Clear Cart</button>
      </div>
    );
  }
}

export default ShoppingCart;
