import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { Dispatch, SetStateAction } from 'react';
import { CartItem } from '../../Context/CartContext';

interface SummaryProps{
  totalPrice:number;
  setCartList: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
}

function ShoppingSummary({totalPrice, setCartList, setTotalPrice}:SummaryProps){
  const navigate = useNavigate()
  
  function handleSuccess(){
    localStorage.removeItem('cartList')
    setCartList([])
    setTotalPrice(0)
    navigate('/cart-detail/successfulpurchase')
  }

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
      <button onClick={handleSuccess}>Finalize purchase</button>
    </div>
  )
}

export default ShoppingSummary;