import { Dispatch, SetStateAction } from "react";
import { CartItem } from "../../Context/CartContext";
import CardCartProd from "../CardCartProd";
import styles from './styles.module.css'

export interface CartContextType{
  cartList: CartItem[];
  setCartList: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
}

function ShoppingList({cartList, setCartList, setTotalPrice}:CartContextType){
  return(
    <div className={styles.boxProductList}>
      <div className={styles.p01}>
        <p>Not ready to checkout? Continue Shopping</p>
      </div> 
      <div className={styles.box1}>
      {cartList.map((prod)=>(
        <div key={prod.id}>
          <CardCartProd prod={prod} cartList={cartList} setCartList={setCartList} setTotalPrice={setTotalPrice} />
          <div className={styles.line}></div>
        </div>))}
      </div>
    </div>
  )
}

export default ShoppingList;