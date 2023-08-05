import { useMutation } from 'react-query';
import styles from './styles.module.css'
import axios from 'axios';
import { FormEvent, useRef, useState } from 'react';
import { URL_PRODUCT } from '../../global/constant';


interface dataCreateProduct {
    title : string;
    price : string;
    description : string;
    categoryId : string;
    images : string[]
  }

function ProductCreate(){
    const [message, setMessage] = useState(false)
    const form = useRef<HTMLFormElement | null>(null)
    const createProdMutation = useMutation((product: dataCreateProduct)=>{
        return axios.post(URL_PRODUCT, product)
      },{
        onSuccess(data){
            console.log(data)
            setMessage(true)
            }
      })
    
    function handleCreateProduct(event: FormEvent<HTMLFormElement>) {
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
        form.current?.reset()
      }
    
    
    return(
        <>
        <h1>Create Product</h1>
        <div className={styles.loginBox}>
          <h4>Product creation form</h4>
          <p>Complete all fields to upload a new product</p>
          <form ref={form} onSubmit={handleCreateProduct}>
            <input type="text" name="title" id="title" placeholder="title" required/>
            <input type="number" name="price" id="price" placeholder="price" required/>
            <input type="text" name="description" id="description" placeholder="description" required/>
            <input type="number" name="categoryId" id="categoryId" placeholder="categoryId"required />
            <input type="text" name="images" id="images" placeholder="images" required/>
            <button type="submit">Create</button>
            {message && <p>Product created successfully.</p>}
          </form>
        </div>
        </>
    )
}

export default ProductCreate;