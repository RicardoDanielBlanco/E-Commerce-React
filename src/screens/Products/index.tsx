import styles from './styles.module.css'
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../components/loading';
import Error from '../../components/Error';
import { fetchDataProduct } from '../../hooks/useFetch';
import FilterBox from '../../components/filterBox';
import { ChangeEvent, useState } from 'react';

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

  
  const URL = 'https://api.escuelajs.co/api/v1/products/?offset=0&limit=9'
  const {data : products, error, isLoading} = useQuery(['categories', selectedOption], () => fetchDataProduct(URL, selectedOption))

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>){
    setSelectedOption(event.target.value)
  }

  if (isLoading) {
    return (<Loading props="products"></Loading>)
  }

  if (error) {
    return <Error props={error} />;
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