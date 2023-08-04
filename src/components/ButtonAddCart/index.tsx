import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from './styles.module.css'
import { CartItem } from "../../Context/CartContext";
import { UpdateCart } from "../../hooks/useAddCart";

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
    images : string
    amount: number;
  }
}

function AddCart({count, productDet, cartList, setCartList, setTotalPrice} : AddCartProps){
  const {id, title, price, images} = productDet
  const product = {id, title, price, images , amount : count}
  const [totalPriceProd, setTotalPriceProd] = useState(count*product.price)

  function HandleUpdateProd(){
    const cartListNew = UpdateCart({cartList, product})
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