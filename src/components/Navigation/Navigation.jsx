import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../ShoppingCart/ShoppingCartContext";
import NavigationCSS from "./Navigation.module.css";

function Navigation() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  // let noOfItems=shoppingCart;
  let noOfItems = shoppingCart.summary.cartQuantity;

  console.log(shoppingCart);
  return (
    <div className={NavigationCSS.navigationBar}>
      <ul>
        <li>
          <Link to="../home">Home</Link>
        </li>

        <li>
          <Link to="../shop/cart">Shop</Link>
        </li>

        <li>
          <Link to="../shop/cart">
            Cart{" "}
            <span>
              <strong>({noOfItems})</strong>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
