import { Outlet } from "react-router-dom";
import { NavCartLog, NavOptions } from "../NavBar";
import styles from './styles.module.css'
import {AuthContext} from "../../Context/AuthContext";
import {CartContext} from "../../Context/CartContext";
import { useContext } from "react";


export function Layout(){
  const authContext = useContext(AuthContext);
  const user = authContext.user
  const cartContext = useContext(CartContext);
  const totalPrice = cartContext.totalPrice
  const cartList = cartContext.cartList
  const cartListAmount = cartList.reduce((total, product) => total + product.amount, 0);


  return (
    <>
    <header>
      <div className={styles.container}>
        <NavOptions role={authContext.role} />
        <NavCartLog user={user} totalPrice={totalPrice} cartListAmount={cartListAmount} />
      </div>
    </header>
    <Outlet />
    </>
  )
}