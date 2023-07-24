import axios from "axios";
import { URL_AUTH_PROFILE, URL_CATEGORY } from "../../global/constant";



export async function fetchDataCategory(){
  const response = await fetch(URL_CATEGORY)
  const data = await response.json()
  return data;
}

export async function fetchDataProduct(URL:string, selectedOption:string){
  const response = ( selectedOption ? await fetch(`${URL}&categoryId=${selectedOption}`) : await fetch(URL) )
  const data = await response.json()
  return data;
}

export async function getUserProfile(token:string){
  const response =  await axios.get(URL_AUTH_PROFILE, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}