import { Dispatch, SetStateAction } from "react";
import { CartItem } from "../../Context/CartContext";
import {useAddCart} from "../../hooks/useAddCart";
import { Link, useLocation } from "react-router-dom";
import { product } from "../../screens/Products";
import styles from './styles.module.css';

export interface AddCartProps{
  product : product;
  cartList : CartItem[];
  setCartList: Dispatch<SetStateAction<CartItem[]>>;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  user : string | null;
}

function AddProductButton({cartList, product, setCartList, user, setTotalPrice}:AddCartProps){
  const location = useLocation();
  product.amount=1
  const {id, title, price, images, amount} = product
  const productAdd = {id, title, price, images, amount}

  function HandleAddProd(){
    const cartListNew = useAddCart({cartList, productAdd})
    const total = cartListNew.reduce((total, product) => total + (product.amount * product.price), 0);
    setCartList(cartListNew)
    setTotalPrice(total)
  }

  if(user){
    return(
      <button className={styles.button} onClick={HandleAddProd}>Add Product</button>
    )
  } else {
    return(
      <Link to='/login' state={{from: location}} replace>
        <button className={styles.button}>Add Product</button>
      </Link>
    )
  }
}

export default AddProductButton;