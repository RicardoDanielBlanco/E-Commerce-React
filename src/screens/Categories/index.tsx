import { useEffect, useState } from "react";
import styles from './styles.module.css';
import { Link } from "react-router-dom";

interface category {
  id : number;
  name : string;
  image : string;
}

function Categories(){
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData(){
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories')
      const json = await response.json()

      if (json.message){
        setLoading(false)
        setError(json.name)
      } else {
        setCategories(json)
        setLoading(false)
        setError(null)
      }
    } catch (e){
      console.error("error", e)
    }
  }

  useEffect(()=>{
    fetchData();
  },[] )
  
  if (loading) {
    return (<h2>Loading ...</h2>)
  }

  if (error) {
    return (
      <>
      <h2>Error en la petición</h2>
      <h3>{error}</h3>
      </>
    )
  }

  if (categories) {
    return(
          <>
          <div>
            <h2>Categories</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam suscipit dolorem sequi voluptate laborum ex! Quia illo consectetur distinctio numquam, accusantium nam, ipsum neque, id nulla dolores itaque a.</p>
            <button>Shop all</button>
          </div>
          <Link to={'/products'} className={styles.conteiner}>
            {categories && (categories.map((category : category)=>(
              <div key={category.id} className={styles.cardCategory}>
                <h3>{category.name}</h3>
                <img src={category.image} alt="" />
              </div>
            )))
            }
          </Link>
          </>
    )
  }
}

export default Categories;