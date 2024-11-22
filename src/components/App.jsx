import { StrictMode, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

import { ShoppingCartProvider } from "./ShoppingCart/ShoppingCartContext";

import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import Cart from "./ShoppingCart/ShoppingCart";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navigation />
        <Home />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
