import App from "./App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Navigation from "./Navigation/Navigation";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Shop",
    element: <Shop />,
  },
  {
    path: "ShoppingCart",
    element: <ShoppingCart />,
  },
];

export default routes;
