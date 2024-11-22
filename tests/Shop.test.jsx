import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../src/components/ShoppingCart/ShoppingCartContext"; // Import the ShoppingCartProvider

import Shop from "../src/components/ShoppingCart/ShoppingCart";

describe("Check for Shop Component logic", () => {
  it.skip("renders correct headings", () => {
    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <Shop />
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
