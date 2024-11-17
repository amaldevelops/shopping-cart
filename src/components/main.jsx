import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./Routes";

const router = createBrowserRouter(routes);

import App from "./App";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Navigation from "./Navigation/Navigation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Navigation /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
