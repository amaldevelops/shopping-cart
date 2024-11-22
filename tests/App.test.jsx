// import { describe, it, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import { ShoppingCartProvider } from "../src/components/ShoppingCart/ShoppingCartContext"; // Import the ShoppingCartProvider

// import App from "../src/components/App";

// describe("Check for H1 component", () => {
//   it("renders correct heading", () => {
//     render(
//       <MemoryRouter>
//         <ShoppingCartProvider>
//           <App />
//         </ShoppingCartProvider>
//       </MemoryRouter>
//     );

//     // Select the first heading (h1) element
//     const heading = screen.getByRole("heading", { level: 1 });
//       const heading2=screen.getByRole("heading",{level:2});


//     // Check if the heading text matches the expected text
//     expect(heading).toHaveTextContent(/Welcome to Mock Shopping cart developed using React/i);
//     expect(heading).toHaveTextContent(/ App Architecture/i)
//   });
// });


import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../src/components/ShoppingCart/ShoppingCartContext"; // Import the ShoppingCartProvider

import App from "../src/components/App";

describe("Check for H1 and H2 components", () => {
  it("renders correct headings", () => {
    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    // Select the first heading (h1) element
    const heading1 = screen.getByRole("heading", { level: 1 });
    const heading2 = screen.getByRole("heading", { level: 2 });

    // Check if the H1 heading text matches the expected text
    expect(heading1).toHaveTextContent(/Welcome to Mock Shopping cart developed using React/i);

    // Check if the H2 heading text matches the expected text
    expect(heading2).toHaveTextContent(/App Architecture/i);
  });
});
