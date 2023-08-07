import styles from './styles.module.css'

interface CountProdProps{
  count : number;
  setCount : (i : number)=>void
  classname : string
}

function CountProduct({count, setCount, classname} : CountProdProps){
  
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
  
  if(classname ==='Big'){
    return(
      <div className={styles.countBoxBig}>
        <button onClick={handleCountDecrement}>-</button>
        <p>{count}</p>
        <button onClick={handleCountIncrement}>+</button>
      </div>
    )
  } else {
    return(
      <div className={styles.countBoxSmall}>
        <button onClick={handleCountDecrement}>-</button>
        <p>{count}</p>
        <button onClick={handleCountIncrement}>+</button>
      </div>
    )
  }
}

export default CountProduct;