import App from "./App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Navigation from "./Navigation/Navigation";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
    children: [{ path: "cart", element: <ShoppingCart /> }],
  },
  // {
  //   path:"cart",
  //   element:<ShoppingCart/>
  // }
];

export default routes;
