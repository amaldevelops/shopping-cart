import { Link } from "react-router-dom";

import NavigationCSS from "./Navigation.module.css";
function Navigation() {
  return (
    <div className={NavigationCSS.navigationBar}>
      {/* <Link to="Home">Home</Link> */}
      {/* <Link to="Home">Home</Link> */}
      <ul>
        {/* <li><Link to="home">Home</Link></li> */}
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="Shop">Shop</a>
        </li>
        <li>
          <a href="ShoppingCart">Cart</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
