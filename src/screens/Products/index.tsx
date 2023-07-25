import styles from './styles.module.css'
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../components/loading';
import Error from '../../components/Error';
import { fetchDataProduct } from '../../hooks/useFetch';
import FilterBox from '../../components/filterBox';
import { ChangeEvent, useContext, useState } from 'react';
import { KEY_CATEGORY, URL_PRODUCT } from '../../global/constant';
import { AuthContext } from '../../Context/AuthContext';


interface product {
  id : number;
  images : string;
  title : string;
  price : number;
}

function Products(){
  const location = useLocation();
  const category  = location.state;
  const [selectedOption, setSelectedOption] = useState(category);
  const authContext = useContext(AuthContext);
  const {data : products, error, isLoading} = useQuery([KEY_CATEGORY, selectedOption], () => fetchDataProduct(URL_PRODUCT, selectedOption))

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>){
    setSelectedOption(event.target.value)
  }

  if (isLoading) {
    return (<Loading props="products"></Loading>)
  }

  if (error) {
    return <Error message={error} />;
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
      <div className={styles.filtersBox}>
        <FilterBox handleCheckboxChange={handleCheckboxChange} selectedOption={selectedOption}></FilterBox>
      </div>
      <div className={styles.productsBox}>
        <p>Showing 1003 Products</p>
        <div className={styles.productsList}>
          {products && (products.map((product : product)=>{
            return (
              <div key={product.id} className={styles.cardProducList}>
                <img src={product.images} alt={`Foto ilustrativa de ${product.title}`} />
                <h3>{product.title}</h3>
                <p>{`$${product.price}`}</p>
                {authContext.role == 'admin' && (
                <div className={styles.adminButtons}>
                  <Link to={`/products/edit/${product.id}`}>Edit</Link>
                  <button>Delete</button>
                </div>
                ) }
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