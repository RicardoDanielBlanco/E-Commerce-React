import axios from "axios"
import { FormEvent, useEffect, useState } from "react"
import { useMutation, useQuery } from "react-query"
import { URL_CATEGORY } from "../../global/constant"
import styles from '../ProductCreate/styles.module.css'
import { useParams } from "react-router-dom"
import { fetchDataProduct } from "../../hooks/useFetch"
import Loading from "../../components/loading"
import Error from '../../components/Error';

interface dataCategory {
  name : string;
  image : string
}

function CategoriesEdit(){
    const [message, setMessage] = useState(false)
    const {id} = useParams()
    const {data, error, isLoading} = useQuery(['CategoryDetails'], () => fetchDataProduct(`${URL_CATEGORY}${id}`,''))
    const [data1, setData1] = useState({
      name: '',
      image: '',
    })

    const createCategoryMutation = useMutation((category: dataCategory)=>{
      return axios.put(`${URL_CATEGORY}${id}`, category)
    },{
      onSuccess(data){
          console.log(data)
          setMessage(true)
          }
    })
  
    useEffect(() => {
      if (data) {
        setData1(data);
      }
    }, [data]);

  function handleEditCategory(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name') as string;
      const image = formData.get('image') as string;
      const category : dataCategory = {name, image};

      createCategoryMutation.mutate(category)
    }
  
  if (isLoading) {
    return (<Loading props="data"></Loading>)
  }

  if (error) {
    return (<Error message={error}></Error>)
  }

  if (data){
    return(
        <>
        <h1>Edit Category</h1>
        <div className={styles.loginBox}>
          <h4>Category creation form</h4>
          <p>Complete all fields to upload a new category</p>
          <form onSubmit={handleEditCategory}>
            <input type="text" name="name" id="name" placeholder="name" defaultValue={data1.name}/>
            <input type="text" name="image" id="image" placeholder="image" defaultValue={data1.image}/>
            <button type="submit">Edit</button>
            {message && <p>Category edited successfully.</p>}
          </form>
        </div>
        </>
    )
  }
}

export default CategoriesEdit;