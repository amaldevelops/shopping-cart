import { Link } from "react-router-dom";

import NavigationCSS from "./Navigation.module.css";

function Navigation({shoppingCart}) {
  let noOfItems = 3;
  return (
    <div className={NavigationCSS.navigationBar}>
      <ul>
        <li>
          <Link to="../home">Home</Link>
        </li>

        <li>
          <Link to="../shop/cart">Shop</Link>
        </li>
        
        {/* <li>
          <Link to="../shop/cart">Cart <span><strong>({noOfItems})</strong></span></Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Navigation;
