import { useParams } from 'react-router-dom';
import ProdDetDetails from '../../components/ProdDetDetails';
import styles from './styles.module.css'
import { useQuery } from 'react-query';
import Loading from '../../components/loading';
import Error from '../../components/Error';
import { fetchDataProduct } from '../../hooks/useFetch';
import { URL_PRODUCT } from '../../global/constant';
import ProdDetImage from '../../components/ProdDetImage';

function ProductDetails(){
  const {id} = useParams()
  const {data, error, isLoading} = useQuery(['KEY_PRODUCT'], ()=>fetchDataProduct(`${URL_PRODUCT}${id}`, ""))

  if (isLoading) {
    return (<Loading props="Details"></Loading>)
  }

  if (error) {
    return <Error message={error} />;
  }

  if (data){
    return(
        <>
        <section className={styles.boxProduct}>
            <ProdDetImage data={data}/>
            <ProdDetDetails data={data}/>
        </section>
        </>
    )
  }

}

export default ProductDetails;