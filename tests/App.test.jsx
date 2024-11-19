// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/components/App";
import Home from "../src/components/Home/Home"

describe("App component", () => {
  it.skip("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/welcome to mock shopping cart developed using react/i);
  });
});

