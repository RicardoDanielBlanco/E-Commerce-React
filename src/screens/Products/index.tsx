import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { useLocation } from 'react-router-dom';

interface product {
  images : string;
  title : string;
  price : number;
}

function Products(){
  const location = useLocation();
  const category  = location.state;
  const URL = 'https://api.escuelajs.co/api/v1/products/?offset=0&limit=9'

  useEffect(()=>{
    fetchProducts()
  }, [])

  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchProducts(){
    const response = ( category ? await fetch(`${URL}&categoryId=${category}`) : await fetch(URL) )
    const json = await response.json()

    if (json.message){
      setLoading(false)
      setError(json.name)
    } else {
      setProducts(json)
      setLoading(false)
      setError(null)
    }
  }

  return(
    <>
    <div className={styles.rectangule6}>
      <h1>Shop Men’s</h1>
      <div className={styles.textBox}>
        <p>Revamp your style with the latest designer trends in men’s clothing or achieve a perfectly curated wardrobe thanks to our line-up of timeless pieces. </p>
      </div>      
    </div>
    <div className={styles.blexBox}>
      <div className={styles.filtersBox}></div>
      <div className={styles.productsBox}>
        <p>Showing 1003 Products</p>
        <div className={styles.productsList}>
          {products && (products.map((product : product)=>{
            return (
              <div className={styles.cardProducList}>
                <img src={product.images} alt={`Foto ilustrativa de ${product.title}`} />
                <h3>{product.title}</h3>
                <p>{`$${product.price}`}</p>
              </div>
            )
          }))}
        </div>
        <button>Load more products</button>
      </div>
    </div>
    </>
  )
}

export default Products;