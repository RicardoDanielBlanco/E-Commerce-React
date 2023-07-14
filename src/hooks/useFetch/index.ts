


export async function fetchDataCategory(){
  const URL = 'https://api.escuelajs.co/api/v1/categories/'
  const response = await fetch(URL)
  const data = await response.json()
  return data;
}

export async function fetchDataProduct(URL:string, selectedOption:string){
  const response = ( selectedOption ? await fetch(`${URL}&categoryId=${selectedOption}`) : await fetch(URL) )
  const data = await response.json()
  return data;
}