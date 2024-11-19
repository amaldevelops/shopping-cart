
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home/Home";

describe("Home component", () => {
  it("renders correct heading", () => {
    render(<Home />);
    // expect(screen.getByRole("heading").textContent).toMatch(/about/i);
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();

  });
});

// it('renders correctly', () => {
//     const tree = renderer
//       .create(<Link page="http://www.facebook.com">Facebook</Link>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
