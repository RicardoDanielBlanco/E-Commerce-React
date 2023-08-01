import { useState } from 'react'
import AddCart from '../ButtonAddCart'
import CountProduct from '../Count'
import styles from './styles.module.css'
import ButtonBuyNow from '../ButtonBuyNow'

interface ProdDetProps{
  title : string;
  price : number;
  description : string;
}

function ProdDetDetails({data}: {data : ProdDetProps}){
  const [count, setCount] = useState(0)

  return(
    <div className={styles.boxDescription}>
      <div className={styles.titleBox}>
        <h2>{data.title}</h2>
        <p>{`$${data.price}`}</p>
      </div>
      <div className={styles.descBox}>
        <p>{data.description}</p>
      </div>
      <div>
        <CountProduct count={count} setCount={setCount}/>
        <div>
          <AddCart count={count} price={data.price}/>
          <ButtonBuyNow />
        </div>
      </div>
    </div>
    )
  }

export default ProdDetDetails;