import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

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
  images: string;
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
  let total = 0;
  const [cartList, setCartList] = useState<CartItem[]>(JSON.parse(localStorage.getItem('cartList') ?? '[]'))
  if (localStorage.getItem('cartList') !== null ){
    total = cartList.reduce((total, product) => total + (product.amount * product.price), 0);
  }
  const [totalPrice, setTotalPrice] = useState(total)
  const value = {cartList, setCartList, totalPrice, setTotalPrice}

  useEffect(()=>{
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }, [cartList])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;