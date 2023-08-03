import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from './styles.module.css'
import { CartItem } from "../../Context/CartContext";
import { useUpdateCart } from "../../hooks/useAddCart";

interface AddCartProps{
  count : number;
  cartList : CartItem[];
  setCartList: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  productDet : {
    id : number;
    title : string;
    price : number;
    description ?: string;
    amount: number;
  }
}

function AddCart({count, productDet, cartList, setCartList, setTotalPrice} : AddCartProps){
  const {id, title, price} = productDet
  const product = {id, title, price, amount : count}
  const [totalPriceProd, setTotalPriceProd] = useState(count*product.price)

  function HandleUpdateProd(){
    const cartListNew = useUpdateCart({cartList, product})
    const total = cartListNew.reduce((total, product) => total + (product.amount * product.price), 0);
    setCartList(cartListNew)
    setTotalPrice(total)
  }

  function CalcPrice(){
    const total = count*price
    setTotalPriceProd(total)
  }

  useEffect(()=>{
    CalcPrice()
  }, [count]
  )

  return(
    <button onClick={HandleUpdateProd} className={styles.buttonAdd}>{`Updtae to Cart $${totalPriceProd}`}</button>
  )
}

export default AddCart;