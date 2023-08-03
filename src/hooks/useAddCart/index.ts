import { CartItem } from "../../Context/CartContext";

export interface AddCartProps{
  cartList : CartItem[];
  productAdd : CartItem;
}

export interface UpdateCartProps{
  cartList : CartItem[];
  product : CartItem;
}

export function useAddCart({cartList, productAdd}:AddCartProps){
  const includeProd = cartList.some((item) => item.id === productAdd.id);

  if (!includeProd){
    const cartListNew = [...cartList ,productAdd]
    return cartListNew
  } else {
    const cartListNew = cartList.map((item) =>
      item.id === productAdd.id ? { ...item, amount: item.amount + productAdd.amount} : item
    )
    return cartListNew;
  }
}

export function useUpdateCart({cartList, product}:UpdateCartProps){
  const {id, title, price, amount} = product
  const productAdd = {id, title, price, amount}
  const includeProd = cartList.some((item) => item.id === productAdd.id);

  if (!includeProd){
    const cartListNew = [...cartList ,productAdd]
    return cartListNew
  } else {
    const cartListNew = cartList.map((item) =>
      item.id === productAdd.id ? { ...item, amount: productAdd.amount} : item
    )
    return cartListNew;
  }
}