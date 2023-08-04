import styles from './styles.module.css'

interface SummaryProps{
  totalPrice:number
}

function ShoppingSummary({totalPrice}:SummaryProps){

  return(
    <div>
      <h4>Order Summary</h4>
      <input type="text" placeholder="Enter coupon code here"/>
      <div className={styles.boxCalc}>
        <div>
          <p>Subtotal</p>
          <p>{`$${totalPrice}`}</p>
        </div>
        <div>
          <p>discount</p>
          <p>$0</p>
        </div>
        <div className={styles.line}></div>
        <div>
          <p>Total</p>
          <p>{`$${totalPrice}`}</p>
        </div>
      </div>
      <button>Continue to checkout</button>
    </div>
  )
}

export default ShoppingSummary;