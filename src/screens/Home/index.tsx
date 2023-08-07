import styles from './styles.module.css'
import brand1 from '../../../public/brand1.png'
import brand2 from '../../../public/brand2.png'
import brand3 from '../../../public/brand3.png'
import brand4 from '../../../public/brand4.png'
import ButtonLink from '../../components/buttonLink'

function Home(){
  const imgLogo = 'https://img.freepik.com/foto-gratis/hombre-afroamericano-mira-ropa-linea-monitor-pantalla-tactil-boutique-moda-centro-comercial-tablero-autoservicio-cliente-masculino-que-busca-ropa-articulos-moda-pantalla-quiosco-minorista_482257-63314.jpg?w=1060&t=st=1691163529~exp=1691164129~hmac=2fe0433ed625089f7eb9b92f2c20b5c1d32034ce270139b13e42f68003454f8b'

  return(
    <div className={styles.container}>
      <h2>Better clothing for the planet</h2>
      <p>Welcome to our eco-friendly clothing store! Discover sustainable and stylish garments, designed with environmental responsibility. Join the green fashion revolution. Thank you for choosing us and supporting a more conscious world. Explore our online store now!</p>
      <div className={styles.containerButtons}>
        <ButtonLink text={'See Categories'} route={'/categories'}/>
        <ButtonLink text={'Shop All'} route={'/products'}/>
      </div>
    <div className={styles.imageBox}>
      <img src={imgLogo} alt="Logo inicar de Home" />
    </div>
    <div className={styles.brandBox}>
      <img src={brand1} alt="brand1" />
      <img src={brand2} alt="brand2" />
      <img src={brand3} alt="brand3" />
      <img src={brand4} alt="brand4" />
    </div>
    </div>
  )
}

export default Home;