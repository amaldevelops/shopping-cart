import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/components/Home/Home";
import { ShoppingCartProvider } from "../src/components/ShoppingCart/ShoppingCartContext"; // Import the ShoppingCartProvider

describe("Home Component", () => {
  it("matches the snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <Home />
        </ShoppingCartProvider>
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
