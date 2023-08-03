import styles from './styles.module.css'

function ShoppingSummary(){

  return(
    <div>
      <h4>Order Summary</h4>
      <input type="text" placeholder="Enter coupon code here"/>
      <div className={styles.boxCalc}>
        <div>
          <p>Subtotal</p>
          <p>$200</p>
        </div>
        <div>
          <p>discount</p>
          <p>$30</p>
        </div>
        <div className={styles.line}></div>
        <div>
          <p>Total</p>
          <p>$200</p>
        </div>
      </div>
      <button>Continue to checkout</button>
    </div>
  )
}

export default ShoppingSummary;