import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/components/Home/Home";

describe("Home Component", () => {
  it("matches the snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});