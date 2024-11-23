import { Link } from "react-router-dom";

import HomeCSS from "./Home.module.css";
import Navigation from "../Navigation/Navigation";
function Home() {
  return (
    <div className={HomeCSS.container}>
      <Navigation />
      <h1>Welcome to Mock Shopping cart developed using React</h1>

      <div className={HomeCSS.container}>
        <p className={HomeCSS.paragraph}>
          The Mock Shopping Cart is a React-based project designed to
          demonstrate a practical understanding of modern development practices.
          This project was developed to learn React Concepts for a dynamic,
          user-friendly shopping cart application, emphasizing React
          fundamentals and best practices.
        </p>
        <p className={HomeCSS.paragraph}>
          This project highlights careful planning of component and folder
          structure, with thoughtful design and implementation of functionality.
          It’s a perfect example of translating React concepts into a
          functional, polished product. Feel free to explore the code and try
          the live demo:
        </p>
        <ul className={HomeCSS.list}>
          <li className={HomeCSS.listItem}>
            <a href="https://github.com/1Amal/React-ShoppingCart">
              Source Code
            </a>
          </li>
          <li className={HomeCSS.listItem}>
            <a href="https://amalk-reactshoppingcart.netlify.app/">Live Demo</a>
          </li>
        </ul>
        <h2 className={HomeCSS.headingsH1}>App Architecture</h2>
        <ul className={HomeCSS.list}>
          <li className={HomeCSS.listItem}>
            Multi-Page Application: Includes a Home Page with a customizable
            introduction and a Shop Page where users can browse and interact
            with products. Navigation between pages is handled through a
            persistent navigation bar.
          </li>
          <li className={HomeCSS.listItem}>
            Dynamic Shopping Cart: The navigation bar displays the current
            number of items in the cart, along with a quick-access button to
            review or modify the cart's contents.
          </li>
          <li className={HomeCSS.listItem}>
            Interactive Product Cards: Each product card includes: A title,
            Quantity, controls (increment, decrement, and manual input field) An
            "Add to Cart" button. Cart updates dynamically based on user
            interactions.
          </li>
          <li className={HomeCSS.listItem}>
            Data Integration: Shop items are fetched dynamically from the
            FakeStore API, showcasing the use of React's useEffect for fetching
            data and useState for managing state.
          </li>
          <li className={HomeCSS.listItem}>
            Testing: The application has been tested using the React Testing
            Library to ensure reliability. Tests focus on custom logic and user
            flows, avoiding direct testing of external libraries like
            react-router-dom.
          </li>

          <li className={HomeCSS.listItem}>
            Styling and Design: The application is styled using CSS Modules and
            Styled Components, ensuring a modern, visually appealing interface.
          </li>
          <li className={HomeCSS.listItem}>
            Deployment Ready: The project is configured for deployment as a
            Single Page Application (SPA), with proper routing handled for
            hosting solutions like Netlify.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
