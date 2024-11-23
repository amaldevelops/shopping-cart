import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../src/components/ShoppingCart/ShoppingCartContext"; // Import the ShoppingCartProvider

import { useOutletContext } from "react-router-dom";
import { useContext } from "react";

import Shop from "../src/components/ShoppingCart/ShoppingCart";

import ShoppingCart from "../src/components/ShoppingCart/ShoppingCart";
import shopItems from "../src/components/Shop/ShopItems/ShopItems"

describe("Check for Shop Component logic", () => {
  it.skip("renders correct headings", () => {
    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <Shop />
          <ShoppingCart/>
          <shopItems/>
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    // Select the first heading (h1) element
    const heading1 = screen.getByRole("heading", { level: 2 });

    // Check if the H1 heading text matches the expected text
    expect(heading1).toHaveTextContent(
      /SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/i
    );
  });
});



// import { describe, it, expect, vi } from "vitest";
// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import * as ReactRouter from "react-router-dom"; // Import to mock useOutletContext
// import { ShoppingCartProvider } from "../src/components/ShoppingCart/ShoppingCartContext"; // Import ShoppingCartProvider

// import Shop from "../src/components/ShoppingCart/ShoppingCart";
// import ShoppingCart from "../src/components/ShoppingCart/ShoppingCart";
// import shopItems from "../src/components/Shop/ShopItems/ShopItems"

// describe("Check for Shop Component logic", () => {
//   it("renders correct headings", () => {
//     // Mock useOutletContext to provide dummy data
//     vi.spyOn(ReactRouter, "useOutletContext").mockReturnValue([
//       {
//         items: [],
//         summary: { cartQuantity: 0, cartTotal: 0 },
//       },
//       vi.fn(), // Mock function for setShoppingCart
//     ]);

//     render(
//       <MemoryRouter>
//         <ShoppingCartProvider>
//           <Shop />
//         </ShoppingCartProvider>
//       </MemoryRouter>
//     );

//     // Select the heading element with role="heading" and level 2
//     const heading1 = screen.getByRole("heading", { level: 2 });

//     // Verify the content of the heading
//     expect(heading1).toHaveTextContent(
//       /SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/i
//     );
//   });
// });
