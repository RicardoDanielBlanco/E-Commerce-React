import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import AddCart from '../ButtonAddCart'
import CountProduct from '../Count'
import styles from './styles.module.css'
import ButtonBuyNow from '../ButtonBuyNow'
import { CartItem } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

interface ProdDetProps{
  data:{
    id : number;
    title : string;
    price : number;
    description : string;
    images : string;
    amount: number;
  }
  cartList : CartItem[];
  setCartList: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  user: string | null;
}

function ProdDetDetails({data, cartList, setCartList, setTotalPrice, user}:  ProdDetProps){
  const includeProd = cartList.some((item) => item.id === data.id);
  const product = includeProd ? cartList.find((item) => item.id === data.id) || data : data;
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
      {user ? <div>
        <CountProduct count={count} setCount={setCount} classname='Big' />
        <div>
          <AddCart count={count} productDet={product} cartList={cartList} setCartList={setCartList} setTotalPrice={setTotalPrice} />
          <ButtonBuyNow count={count} priceDet={data.price} productDet={product} cartList={cartList} setCartList={setCartList} />
        </div>
      </div>
       : 
          <p>Before buying you need to <Link to={'/login'}> log in</Link>.</p>
       }
    </div>
    )
  }

export default ProdDetDetails;