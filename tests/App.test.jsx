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
    const paragraph = screen.getByText(
      /The Mock Shopping Cart is a React-based project designed to demonstrate a practical understanding of modern development practices. This project was developed to learn React Concepts for a dynamic, user-friendly shopping cart application, emphasizing React fundamentals and best practices./i
    );

    // Check if the H1 heading text matches the expected text
    expect(heading1).toHaveTextContent(
      /Welcome to Mock Shopping cart developed using React/i
    );

    // Check if the H2 heading text matches the expected text
    expect(heading2).toHaveTextContent(/App Architecture/i);

    expect(paragraph).toBeInTheDocument;
  });
});
