import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import './index.css'
import App from "./App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Navigation from "./Navigation/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    // element:<App/>,
    element: <Home />,
    errorElement: <Home />,
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
    <RouterProvider router={router} />
  </StrictMode>
);
