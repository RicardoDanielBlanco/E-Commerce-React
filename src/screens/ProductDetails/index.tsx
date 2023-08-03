import { useParams } from 'react-router-dom';
import ProdDetDetails from '../../components/ProdDetDetails';
import styles from './styles.module.css'
import { useQuery } from 'react-query';
import Loading from '../../components/loading';
import Error from '../../components/Error';
import { fetchDataProduct } from '../../hooks/useFetch';
import { URL_PRODUCT } from '../../global/constant';
import ProdDetImage from '../../components/ProdDetImage';
import {CartContext} from '../../Context/CartContext';
import { useContext } from 'react';

function ProductDetails(){
  const {id} = useParams()
  const {data, error, isLoading} = useQuery(['KEY_PRODUCT'], ()=>fetchDataProduct(`${URL_PRODUCT}${id}`, ""))
  const cartContext = useContext(CartContext);

  if (isLoading) {
    return (<Loading props="Details"></Loading>)
  }

  if (error) {
    return <Error message={error} />;
  }

  if (data){
    data.amount = 0;
    return(
        <>
        <section className={styles.boxProduct}>
            <ProdDetImage data={data}/>
            <ProdDetDetails data={data} cartList={cartContext.cartList} setCartList={cartContext.setCartList}/>
        </section>
        </>
    )
  }

}

export default ProductDetails;