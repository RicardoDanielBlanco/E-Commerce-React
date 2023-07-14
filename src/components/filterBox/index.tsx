import { useQuery } from "react-query"
import Loading from "../loading"
import Error from '../../components/Error';
import { fetchDataCategory } from "../../hooks/useFetch";
import styles from './styles.module.css'

interface FilterBoxProps {
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
}

interface filter{
  id : string;
  name : string
}

function FilterBox({handleCheckboxChange, selectedOption}:FilterBoxProps){
  const {data : filters, error, isLoading} = useQuery(['filters'], fetchDataCategory)

  if (isLoading) {
    return (<Loading props="categories" />)
  }
  
  if (error) {
    return (<Error props={error} />)
  }

  if (filters){
    return (
      <>
      <h4>Filters</h4>
      <p>Category</p>
      <div className={styles.filterCheckBox}>
      {filters.map((filter: filter)=>(
        <div key={filter.id} className={styles.flex}>
          <input 
          type="checkbox" 
          value={filter.id} 
          checked={selectedOption == filter.id} 
          onChange={handleCheckboxChange}
          />
          <label>{filter.name}</label>
        </div>
      ))
      }
      </div>
      </>

      )
  }

}

export default FilterBox;