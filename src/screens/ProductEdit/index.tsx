import { useMutation, useQuery } from 'react-query';
import { fetchDataProduct } from '../../hooks/useFetch';
import styles from './styles.module.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FormEvent } from 'react';

interface dataCreateProduct {
    title : string;
    price : string;
    description : string;
    categoryId : string;
    images : string[]
  }

function ProductEdit(){
    const {id} = useParams()

    const {data} = useQuery(['ProductDetails'], () => fetchDataProduct(`https://api.escuelajs.co/api/v1/products/${id}`,''))
    console.log(data)

    const createProdMutation = useMutation((product: dataCreateProduct)=>{
        return axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, product)
      },{
        onSuccess(data){
            console.log(data)
            console.log('Producto editado con éxito')
            }
      })

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
            title, price, description, categoryId, images: imagesArray};

        createProdMutation.mutate(product)
      }


    if (data){
        return(
            <>
            <h1>Modify Products</h1>
            <div className={styles.loginBox}>
              <h4>Product edit form</h4>
              <p>Fill in the fields you want to be changed</p>
              <form onSubmit={handleEditProduct}>
                <input type="text" name="title" id="title" placeholder="title" defaultValue={data.title}/>
                <input type="number" name="price" id="price" placeholder="price" defaultValue={data.price}/>
                <input type="text" name="description" id="description" placeholder="description" defaultValue={data.description}/>
                <input type="number" name="categoryId" id="categoryId" placeholder="categoryId"defaultValue={data.category.id} />
                <input type="text" name="images" id="images" placeholder="images" defaultValue={data.images}/>
                <button type="submit">Edit</button>
              </form>
            </div>
            </>
        )
    }
}

export default ProductEdit;