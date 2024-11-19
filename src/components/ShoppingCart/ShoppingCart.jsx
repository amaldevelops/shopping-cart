import styled from "styled-components";
import { useState, useEffect } from "react";
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
  const [shoppingCart, setShoppingCart] = useState([
    { totalItems: 0, totalPrice: 0 },

    { itemName: "Item Name", itemPrice: "$0", quantity: 0, totalItemPrice: 0 },
  ]);

  if (shoppingCart === undefined) {
    return (
      <div>
        <Navigation />
        <h1>Empty Cart</h1>
      </div>
    );
  } else {
    return (
      <div>
        {/* <Navigation /> */}

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
        <button type="button">Clear Cart</button>
      </div>
    );
  }
}

export default ShoppingCart;
