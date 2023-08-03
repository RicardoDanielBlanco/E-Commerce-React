import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import AddCart from '../ButtonAddCart'
import CountProduct from '../Count'
import styles from './styles.module.css'
import ButtonBuyNow from '../ButtonBuyNow'
import { CartItem } from '../../Context/CartContext'

interface ProdDetProps{
  data:{
    id : number;
    title : string;
    price : number;
    description : string;
    amount: number;
  }
  cartList : CartItem[];
  setCartList: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
}

function ProdDetDetails({data, cartList, setCartList, setTotalPrice}:  ProdDetProps){
  const includeProd = cartList.some((item) => item.id === data.id);
  const product = includeProd ? cartList.find((item) => item.id === data.id) || data : data;
  console.log(product)
  const [count, setCount] = useState(product?.amount || 0);

  useEffect(() => {
    if (product) {
      setCount(product.amount);
    }
  }, [product]);

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
          <AddCart count={count} productDet={product} cartList={cartList} setCartList={setCartList} setTotalPrice={setTotalPrice} />
          <ButtonBuyNow count={count} priceDet={data.price} productDet={product} cartList={cartList} setCartList={setCartList} />
        </div>
      </div>
    </div>
    )
  }

export default ProdDetDetails;