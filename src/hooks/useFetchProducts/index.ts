import { useEffect } from "react";


function useFetchProducts(){

  useEffect(()=>{
    fetchProducts()
  }, [])

  async function fetchProducts(){
    const response = await fetch('https://api.escuelajs.co/api/v1/products/?offset=0&limit=10')
    const json = await response.json()

    console.log(json)
  }

}

export default useFetchProducts;