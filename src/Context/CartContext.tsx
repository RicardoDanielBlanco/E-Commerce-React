import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";


export const CartContext = createContext<CartContextType>(
  {cartList: [],
  setCartList: () => {},
  setTotalPrice: () => {},
  totalPrice: 0}
)

export interface CartItem {
  id: number;
  title: string;
  price: number;
  amount: number;
}

interface CartContextType {
  cartList: CartItem[];
  setCartList: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  totalPrice: number;
}

interface CartProviderProps {
  children: ReactNode;
}

function CartProvider({children} : CartProviderProps){
  const [cartList, setCartList] = useState<CartItem[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const value = {cartList, setCartList, totalPrice, setTotalPrice}


  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )

}

export default CartProvider;