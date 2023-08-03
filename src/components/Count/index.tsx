import styles from './styles.module.css'

interface CountProdProps{
  count : number;
  setCount : (i : number)=>void
}

function CountProduct({count, setCount} : CountProdProps){
  
  function handleCountIncrement(){
    setCount(count+1)
  }

  function handleCountDecrement(){
    if (count>0){
      setCount(count-1)
    } else {
      setCount(0)
    }
  }
  
  return(
    <div className={styles.countBox}>
      <button onClick={handleCountDecrement}>-</button>
      <p>{count}</p>
      <button onClick={handleCountIncrement}>+</button>
    </div>
  )
}

export default CountProduct;