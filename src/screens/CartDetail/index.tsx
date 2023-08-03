import ShoppingList from "../../components/ShoppingList";
import ShoppingSummary from "../../components/ShoppingSummary";
import styles from './styles.module.css'

function CartDetail(){
  return(
    <section className={styles.boxScreen}>
      <h1>Your cart</h1>
      <div className={styles.boxFlex}>
        <ShoppingList />
        <ShoppingSummary />
      </div>

    </section>
  )
}

export default CartDetail;