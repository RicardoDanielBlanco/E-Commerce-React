import { Link } from "react-router-dom";
import styles from './styles.module.css'
import CartLog from "../CartLog";

export function NavOptions(){
  return (
    <nav className={styles.NavOptions}>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/categories'}>Categories</Link></li>
        <li><Link to={'/products'}>Products</Link></li>
        <li>Search</li>
      </ul>
    </nav>
  )
}

export function NavCartLog({ user, totalPrice, cartListAmount }: { user: string | null, totalPrice : number, cartListAmount : number }){
  return (
    <nav className={styles.NavCartLog}>
      <ul>
        <li><Link to={'/cart-detail'}>
          <CartLog totalPrice={totalPrice } cartListAmount={cartListAmount} />
          </Link>
        </li>
        { !user ? <li><Link to={'/login'}>Login</Link></li> : <li><Link to={'/logout'}>Logout</Link></li>}
      </ul>
    </nav>
  )
}

