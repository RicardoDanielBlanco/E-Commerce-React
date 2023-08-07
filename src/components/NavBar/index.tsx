import { Link, useNavigate } from "react-router-dom";
import styles from './styles.module.css'
import CartLog from "../CartLog";
import { FormEvent } from "react";

interface roleProps{
  role : string | null
}

export function NavOptions({role} : roleProps){
  const navigate = useNavigate()

  function handleSearch(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const propsearch = formData.get("propsearch") as string;
    navigate(`/products/${propsearch}`);
  }

  return (
    <nav className={styles.NavOptions}>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/categories'}>Categories</Link></li>
        <li><Link to={'/products'}>Products</Link></li>
        { role === 'admin' && <li><Link to={'/categories/create'}>Create Category</Link></li>}
        { role === 'admin' && <li><Link to={'/products/create'}>Create Product</Link></li>}
        <li>
          <form onSubmit={handleSearch}>
            <input type="text" name="propsearch" placeholder="Search product ..." />
            <button className={styles.searchButton} type="submit"></button>
          </form>
        </li>
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