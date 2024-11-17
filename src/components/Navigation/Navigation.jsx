import { Link } from "react-router-dom";

import NavigationCSS from "./Navigation.module.css";



function Navigation() {
  let noOfItems=3;
  return (
    <div className={NavigationCSS.navigationBar}>
      <ul>
        <li>
          <Link to="../Home">Home</Link>
        </li>

        <li>
          <Link to="../Shop">Shop</Link>
        </li>
        <li>
          <Link to="../ShoppingCart">Cart <span><strong>({noOfItems})</strong></span></Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
