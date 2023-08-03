import styles from './styles.module.css'

function CardCartProd(){
  
  return(
    <article className={styles.boxProd}>
      <div className={styles.boxImage}></div>
      <div className={styles.boxDetails}>
        <h4>Men’s winter jacket</h4>
        <p>Size: L</p>
        <p>Quantity: 1</p>
        <h4>$99</h4>
      </div>
      <div className={styles.boxRemove}>
        <p>Remove</p>
      </div>
    </article>
  )
}

export default CardCartProd;