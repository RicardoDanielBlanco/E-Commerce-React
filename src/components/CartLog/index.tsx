import cartLog from './cart.svg';
import styles from './styles.module.css'

interface cartLogProps{
  totalPrice : number;
  cartListAmount : number;
}

function CartLog({totalPrice, cartListAmount} : cartLogProps){


  return(
    <div className={styles.cartBox}>
      <p>{cartListAmount}</p>
      <img src={cartLog} alt="cart icon" />
      <p>{`$${totalPrice}`}</p>
    </div>
  )
}

export default CartLog;