import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CountProduct from '../Count';
import styles from './styles.module.css'
import { UpdateCart } from '../../hooks/useAddCart';
import { CartItem } from '../../Context/CartContext';

interface CardCartProps {
  prod : CartItem;
  cartList : CartItem[];
  setCartList: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
}

function CardCartProd({prod, cartList, setCartList, setTotalPrice} : CardCartProps){
  const [product, setProduct] = useState(prod)
  const subTotal = (prod.price*prod.amount)
  const [count, setCount] = useState(prod.amount);

  function UpdateProd(){
    if (count === 0){
      handleRemoveProduct()
    } else {
      const {id, title, price, images} = product
      const Product = {id, title, price, images, amount : count}
      setProduct(Product)
      const cartListNew = UpdateCart({cartList, product : Product})
      setCartList(cartListNew)
      const total = cartListNew.reduce((total, product) => total + (product.amount * product.price), 0);
      setTotalPrice(total)
    }
  }

  function handleRemoveProduct(){
    const cartListNew = cartList.filter((item) => item.id !== product.id)
    setCartList(cartListNew)
    const total = cartListNew.reduce((total, product) => total + (product.amount * product.price), 0);
    setTotalPrice(total)
  }

  useEffect(()=>{
    UpdateProd()
  }, [count]
  )
  
  return(
      <article className={styles.boxProd}>
        <div className={styles.boxImage}>
          <img src={product.images} alt={product.title} />
        </div>
        <div className={styles.boxDetails}>
          <h4>{product.title}</h4>
          <p>{`Unit price: $${product.price}`}</p>
          <CountProduct count={count} setCount={setCount} classname='Small'/>
          <h4>{`$${subTotal}`}</h4>
        </div>
        <div className={styles.boxRemove}>
          <p onClick={handleRemoveProduct}>Remove</p>
        </div>
      </article>
  )
}

export default CardCartProd;