import { createContext } from "react";

interface CartContextType {
  userId?: number;
  cardId?: number;
  username?: string;
}

const CartContext = createContext<CartContextType>({});

export default CartContext;