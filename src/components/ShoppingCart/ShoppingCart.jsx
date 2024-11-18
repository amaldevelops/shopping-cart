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
    { itemName: "Item Name", itemPrice: "$0", quantity: 0 },
  ]);
  return (
    <div>
      <Navigation />
      <div>
        <h1>Cart</h1>

      
      <p><strong>{shoppingCart[0]["itemName"]} : </strong>3 x <span>{shoppingCart[0]["itemPrice"]} </span>
      <span>=Aud50</span>

      <h2>Total:Aud</h2>
      
      </p>
      </div>

 

      <button type="button">Checkout</button>
      <button type="button">Clear Cart</button>
    </div>
  );
}

export default ShoppingCart;
