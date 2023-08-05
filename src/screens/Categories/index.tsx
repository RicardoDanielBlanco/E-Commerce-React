import styles from './styles.module.css';
import { Link } from "react-router-dom";
import {useQuery} from 'react-query';
import Loading from '../../components/loading';
import Error from '../../components/Error';
import { fetchDataCategory } from '../../hooks/useFetch';
import { KEY_CATEGORY, URL_CATEGORY } from '../../global/constant';
import { AuthContext } from '../../Context/AuthContext';
import ButtonsEdDel from '../../components/ButtonsEdDel';
import { useContext, useState } from 'react';
import { Modal } from '../../components/Modal';
import ModalDetele from '../../components/ModalDetele';
import ButtonLink from '../../components/buttonLink';

interface category {
  id : number;
  name : string;
  image : string;
}

function Categories(){
  const authContext = useContext(AuthContext);
  const {data : categories, error, isLoading, refetch} = useQuery([KEY_CATEGORY], fetchDataCategory)
  const [id, setId] = useState<number | null>(null)
  const [openModal, setOpenModal] = useState(false)

  if (isLoading) {
    return (<Loading props="categories"></Loading>)
  }

  if (error) {
    return (<Error message={error}></Error>)
  }

  if (categories) {
    return(
          <>
          <div className={styles.conteinerTitle}>
            <h2>Categories</h2>
            <p>Discover eco-friendly fashion, high-quality garments with sustainable style to protect our planet. Embrace responsible fashion and make a difference with us.</p>
            <ButtonLink text={'Shop All'} route={'/products'}/>
          </div>
          <div className={styles.conteiner}>
            {categories && (categories.map((category : category)=>(
              <div key={category.id} className={styles.cardCategory}>
                <Link to={'/products'} state={category.id}>
                <h3>{category.name}</h3>
                <img src={category.image} alt="" />
                </Link>
                {authContext.role == 'admin' && <ButtonsEdDel URL={`/categories/edit/${category.id}`} setOpenModal={setOpenModal} id={category.id} setId={setId} /> }
              </div>
            )))
            }
          </div>
          {openModal && 
            <Modal>
              <ModalDetele setOpenModal={setOpenModal} URL={URL_CATEGORY} id={id} afterDelete={() => refetch()} />
            </Modal>
          }
          </>
    )
  }
}

export default Categories;