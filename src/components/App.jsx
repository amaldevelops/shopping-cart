import { StrictMode, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import Cart from "./ShoppingCart/ShoppingCart"

function App() {
  return (
    <>
      <Navigation />
      <Home />
     
    </>
  );
}

export default App;
