import styles from './styles.module.css'
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../../components/loading';
import Error from '../../components/Error';
import { fetchDataProduct } from '../../hooks/useFetch';
import FilterBox from '../../components/filterBox';
import { ChangeEvent, useContext, useState } from 'react';
import { KEY_PRODUCT, URL_PRODUCT } from '../../global/constant';
import { AuthContext } from '../../Context/AuthContext';
import ButtonsEdDel from '../../components/ButtonsEdDel';
import { Modal } from '../../components/Modal';
import ModalDetele from '../../components/ModalDetele';
import AddProductButton from '../../components/AddProductButton';
import {CartContext} from '../../Context/CartContext';

export interface product {
  id : number;
  images : string;
  title : string;
  price : number;
  amount ?: number;
}

function Products(){
  const location = useLocation();
  const category  = location.state;
  const [selectedOption, setSelectedOption] = useState(category);
  const [openModal, setOpenModal] = useState(false)
  const authContext = useContext(AuthContext);
  const cartContext = useContext(CartContext);
  const [id, setId] = useState<number | null>(null)
  const [limit, setLimit] = useState(12)
  
  const {data : products, error, isLoading, refetch} = useQuery([KEY_PRODUCT, selectedOption, limit], () => fetchDataProduct(`${URL_PRODUCT}?offset=0&limit=${limit}`, selectedOption))

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>){
    setSelectedOption(event.target.value)
  }

  function handleLoadMore(){
    const newLimit = limit + 12
    setLimit(newLimit)
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
        <div className={styles.productsList}>
          {products && (products.map((product : product)=>{
            return (
              <div key={product.id} className={styles.cardProducList}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.images} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>{`$${product.price}`}</p>
                </Link>
                <AddProductButton cartList={cartContext.cartList} product={product} setCartList={cartContext.setCartList} user={authContext.user} setTotalPrice={cartContext.setTotalPrice} />
                {authContext.role == 'admin' && <ButtonsEdDel URL={`/products/edit/${product.id}`} setOpenModal={setOpenModal} id={product.id} setId={setId}/> }
              </div>
            )
          }))}
        </div>
        {openModal && 
        <Modal>
          <ModalDetele setOpenModal={setOpenModal} URL={URL_PRODUCT} id={id} afterDelete={() => refetch()} />
        </Modal>
        }
        <button id={styles.Load} onClick={handleLoadMore} >Load more products</button>
      </div>
    </div>
    </>
  )
}

export default Products;