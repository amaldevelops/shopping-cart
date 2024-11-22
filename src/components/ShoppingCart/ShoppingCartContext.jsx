import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
    summary: { cartQuantity: 0, CartTotal: 0 },
  });

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
