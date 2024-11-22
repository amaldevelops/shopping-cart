import { Link } from "react-router-dom";

import HomeCSS from "./Home.module.css";
import Navigation from "../Navigation/Navigation";
function Home() {
  return (
    <div className={HomeCSS.container}>
      <Navigation />
      <h1>Welcome to Mock Shopping cart developed using React</h1>
      <div className={HomeCSS.container}>
        <h2>About</h2>
        <ul className={HomeCSS.list}>
          <li>
            <a href="https://github.com/1Amal/React-ShoppingCart">
              Source Code
            </a>
          </li>
          <li>
            <a href="https://amalk-reactshoppingcart.netlify.app/">Live Demo</a>
          </li>
        </ul>
      </div>
      <div className={HomeCSS.container}>
        <h2 className={HomeCSS.headingsH1}>App Architecture</h2>
        <h3>Component Structure</h3>
        <ul className={HomeCSS.list}>
          <li className={HomeCSS.listItem}>Main =&gt; App =&gt; Home =&gt; </li>
          <li className={HomeCSS.listItem}>Shop =&gt; </li>
          <li className={HomeCSS.listItem}>Shopping Cart</li>
          <li className={HomeCSS.listItem}>Product</li>
        </ul>
        <div className={HomeCSS.container}>
          <h2 className={HomeCSS.headingsH2}>App Specification</h2>
          <ul className={HomeCSS.list}>
            <li className={HomeCSS.listItem}>Consistent Navigation Bar</li>
            <li>Fetch shop items from FakeStore API </li>
            <li>Clear out any missing in props validation errors</li>
            <li>Use React Testing Library to test the App</li>
            <li>Style the app using CSS Modules and Styled Components</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
