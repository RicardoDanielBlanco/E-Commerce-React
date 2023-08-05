import { useMutation, useQuery } from 'react-query';
import { fetchDataProduct } from '../../hooks/useFetch';
import styles from '../ProductCreate/styles.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { URL_PRODUCT } from '../../global/constant';
import Loading from "../../components/loading"
import Error from '../../components/Error';

interface dataCreateProduct {
  title : string;
  price : string;
  description : string;
  category : {
    id : string};
  images : string[]
}

function ProductEdit(){
  const [message, setMessage] = useState(false)
  const {id} = useParams()
  const {data, error, isLoading} = useQuery(['ProductDetails'], () => fetchDataProduct(`${URL_PRODUCT}${id}`,''))
  const [data1, setData1] = useState({
    title: '',
    price: '',
    description: '',
    category : {
      id : ''
    },
    images: [],
  })

  const createProdMutation = useMutation((product: dataCreateProduct)=>{
      return axios.put(`${URL_PRODUCT}${id}`, product)
    },{
      onSuccess(){
        console.log('Producto editado con éxito')
        setMessage(true)
        }
    })
  
  useEffect(()=>{
    setData1(data)
  }, [data])

  function handleEditProduct(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      const title = formData.get('title') as string;
      const price = formData.get('price') as string;
      const description = formData.get('description') as string;
      const categoryId = formData.get('categoryId') as string;
      const images = formData.get('images') as string;
      const imagesArray: string[] = [images];

      const product : dataCreateProduct = {
        title, price, description, category: { id: categoryId }, images: imagesArray};

      createProdMutation.mutate(product)
    }
  

  if (isLoading) {
    return (<Loading props="data"></Loading>)
  }

  if (error) {
    return (<Error message={error}></Error>)
  }

  if (data1){
      return(
          <>
          <h1>Modify Products</h1>
          <div className={styles.loginBox}>
            <h4>Product edit form</h4>
            <p>Fill in the fields you want to be changed</p>
            <form onSubmit={handleEditProduct}>
              <input type="text" name="title" id="title" placeholder="title" defaultValue={data1.title}/>
              <input type="number" name="price" id="price" placeholder="price" defaultValue={data1.price}/>
              <input type="text" name="description" id="description" placeholder="description" defaultValue={data1.description}/>
              <input type="number" name="categoryId" id="categoryId" placeholder="categoryId" defaultValue={data1.category.id} />
              <input type="text" name="images" id="images" placeholder="images" defaultValue={data1.images}/>
              <button type="submit">Edit</button>
              {message && <p>Product edited successfully.</p>}
            </form>
          </div>
          </>
      )
  }
}

export default ProductEdit;