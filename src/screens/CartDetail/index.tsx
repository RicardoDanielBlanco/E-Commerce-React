import ShoppingList from "../../components/ShoppingList";
import ShoppingSummary from "../../components/ShoppingSummary";
import styles from './styles.module.css'
import {CartContext} from '../../Context/CartContext';
import { useContext } from "react";

function CartDetail(){
  const cartContext = useContext(CartContext);

  return(
    <section className={styles.boxScreen}>
      <h1>Your cart</h1>
      <div className={styles.boxFlex}>
        <ShoppingList cartList={cartContext.cartList} setCartList={cartContext.setCartList} setTotalPrice={cartContext.setTotalPrice} />
        <ShoppingSummary totalPrice={cartContext.totalPrice} />
      </div>

    </section>
  )
}

export default CartDetail;