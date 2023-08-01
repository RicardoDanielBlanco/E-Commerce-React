import { useEffect, useState } from "react";
import styles from './styles.module.css'

interface AddCartProps{
  count : number;
  price : number
}

function AddCart({count, price} : AddCartProps){
  const [totalPrice, setTotalPrice] = useState(0)

  function CalcPrice(){
    const total = count*price
    setTotalPrice(total)
  }

  useEffect(()=>{
    CalcPrice()
  }, [count]
  )

  return(
    <button className={styles.buttonAdd}>{`Add to Cart $${totalPrice}`}</button>
  )
}

export default AddCart;