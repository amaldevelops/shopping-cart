import { StrictMode, useState } from "react";
import { Link } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import Cart from "./ShoppingCart/ShoppingCart";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

// const App = () => <h1>Welcome to Mock Shopping cart developed using React</h1>;

export default App;
