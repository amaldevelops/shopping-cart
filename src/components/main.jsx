import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ShoppingCartProvider } from "./ShoppingCart/ShoppingCartContext"; // import your context provider

import routes from "./Routes";

const router = createBrowserRouter(routes);

import Navigation from "./Navigation/Navigation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  </StrictMode>
);
