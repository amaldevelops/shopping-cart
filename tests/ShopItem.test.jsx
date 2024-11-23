import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopItems from "../src/components/Shop/ShopItems/ShopItems";

// Mock the global fetch function
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        title: "Test Product",
        description: "This is a test product description.",
        price: "99.99",
        image: "https://via.placeholder.com/200",
      }),
  })
);

describe("ShopItems Component with userEvent", () => {
  const mockUpdateCartAddItem = vi.fn(); // Mock function for adding items
  const mockUpdateCartRemoveItem = vi.fn(); // Mock function for removing items

  it("allows interaction and updates state correctly", async () => {
    // Render the component
    render(
      <ShopItems
        itemSearchTerm={1}
        updateCartAddItem={mockUpdateCartAddItem}
        updateCartRemoveItem={mockUpdateCartRemoveItem}
      />
    );

    // Wait for the item details to load
    expect(await screen.findByText("Test Product")).toBeInTheDocument();

    // Check initial quantity
    const quantityInput = screen.getByRole("spinbutton", { name: /quantity/i });
    expect(quantityInput.value).toBe("1");

    // Simulate increasing quantity
    const increaseButton = screen.getByRole("button", { name: "+" });
    await userEvent.click(increaseButton);
    expect(quantityInput.value).toBe("2");

    // Simulate decreasing quantity
    const decreaseButton = screen.getByRole("button", { name: "-" });
    await userEvent.click(decreaseButton);
    expect(quantityInput.value).toBe("1");

    // Simulate adding to cart
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    await userEvent.click(addToCartButton);
    expect(mockUpdateCartAddItem).toHaveBeenCalledTimes(1);
    expect(mockUpdateCartAddItem).toHaveBeenCalledWith({
      itemName: "Test Product",
      itemImage: "https://via.placeholder.com/200",
      itemDescription: "This is a test product description.",
      itemPrice: "99.99",
      quantity: 1,
    });

    // Simulate removing the item
    const removeItemButton = screen.getByRole("button", {
      name: /remove item/i,
    });
    await userEvent.click(removeItemButton);
    expect(mockUpdateCartRemoveItem).toHaveBeenCalledTimes(1);
    expect(mockUpdateCartRemoveItem).toHaveBeenCalledWith({
      itemName: "Test Product",
      itemImage: "https://via.placeholder.com/200",
      itemDescription: "This is a test product description.",
      itemPrice: "99.99",
      quantity: 1,
    });
  });
});
