import styles from './styles.module.css';
import { Link } from "react-router-dom";
import {useQuery} from 'react-query';
import Loading from '../../components/loading';
import Error from '../../components/Error';

interface category {
  id : number;
  name : string;
  image : string;
}

function Categories(){
  const URL = 'https://api.escuelajs.co/api/v1/categories/'
  async function fetchData(){
    const response = await fetch(URL)
    const data = await response.json()
    return data;
  }

  const {data : categories, error, isLoading} = useQuery(['categories'], fetchData)


  if (isLoading) {
    return (<Loading props="categories"></Loading>)
  }

  if (error) {
    return (<Error props={error}></Error>)
  }

  if (categories) {
    return(
          <>
          <div>
            <h2>Categories</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam suscipit dolorem sequi voluptate laborum ex! Quia illo consectetur distinctio numquam, accusantium nam, ipsum neque, id nulla dolores itaque a.</p>
            <button>Shop all</button>
          </div>
          <div className={styles.conteiner}>
            {categories && (categories.map((category : category)=>(
              <Link key={category.id} to={'/products'} state={category.id}>
                <div className={styles.cardCategory}>
                  <h3>{category.name}</h3>
                  <img src={category.image} alt="" />
                </div>
              </Link>
            )))
            }
          </div>
          </>
    )
  }
}

export default Categories;