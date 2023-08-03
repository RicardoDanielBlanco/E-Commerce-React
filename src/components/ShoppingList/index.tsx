import CardCartProd from "../CardCartProd";
import styles from './styles.module.css'

function ShoppingList(){

  return(
    <div className={styles.boxProductList}>
      <div className={styles.p01}>
        <p>Not ready to checkout? Continue Shopping</p>
      </div> 
      <div className={styles.box1}>
        <div>
          <CardCartProd />
          <div className={styles.line}></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ShoppingList;