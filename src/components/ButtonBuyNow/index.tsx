import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from './styles.module.css'
import { CartItem } from "../../Context/CartContext";
import { useUpdateCart } from "../../hooks/useAddCart";
import { useNavigate } from "react-router-dom";

interface AddCartProps{
  count : number;
  priceDet : number
  cartList : CartItem[];
  setCartList: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  productDet : {
    id : number;
    title : string;
    price : number;
    description : string;
    amount: number;
  }
}

function ButtonBuyNow({count, productDet, cartList, setCartList} : AddCartProps){
    const navigate = useNavigate();
    const {id, title, price} = productDet
    const product = {id, title, price, amount : count}
  
    function HandleUpdateProd(){
      const cartListNew = useUpdateCart({cartList, product})
      setCartList(cartListNew)
      navigate("/cart-detail")
    }

  
    return(
      <button onClick={HandleUpdateProd} className={styles.buttonAdd}>Buy Now</button>
    )
}

export default ButtonBuyNow;