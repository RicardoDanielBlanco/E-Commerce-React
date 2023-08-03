import styles from './styles.module.css'

interface ProdDetProps{
  title : string;
  images : string;
}

function ProdDetImage({data} : {data : ProdDetProps}){

  return(
    <div className={styles.boxImage}>
      <div className={styles.image}>
        <img src={data.images} alt={data.title} />
      </div>
    </div>
  )
}

export default ProdDetImage;