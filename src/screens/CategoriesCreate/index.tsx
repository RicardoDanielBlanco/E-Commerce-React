import axios from "axios"
import { FormEvent, useRef } from "react"
import { useMutation } from "react-query"
import { URL_CATEGORY } from "../../global/constant";
import styles from '../ProductCreate/styles.module.css'

interface dataCreateCategory {
  name : string;
  image : string
}

function CategoriesCreate(){
  const form = useRef<HTMLFormElement | null>(null)
  const createCategoryMutation = useMutation((category: dataCreateCategory)=>{
      return axios.post(URL_CATEGORY, category)
    },{
      onSuccess(data){
          console.log(data)
          console.log('Categoría creada con éxito')
          }
    })
  
  function handleCreateCategory(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      const formData = new FormData(event.currentTarget);
      const name = formData.get('name') as string;
      const image = formData.get('image') as string;
      const category : dataCreateCategory = {name, image};

      createCategoryMutation.mutate(category)
      form.current?.reset()
    }
   
  return(
      <>
      <h1>Create Category</h1>
      <div className={styles.loginBox}>
        <h4>Category creation form</h4>
        <p>Complete all fields to upload a new category</p>
        <form ref={form} onSubmit={handleCreateCategory}>
          <input type="text" name="name" id="name" placeholder="name" required/>
          <input type="text" name="image" id="image" placeholder="image" required/>
          <button type="submit">Create</button>
        </form>
      </div>
      </>
  )
}

export default CategoriesCreate;