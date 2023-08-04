import ButtonLink from "../../components/buttonLink";
import styles from './styles.module.css'

function NotFound(){

  return(
    <section className={styles.container}>
      <p>Error</p>
      <h2>404</h2>
      <p>Page Not Found</p>
      <ButtonLink text={'Return home'} route={'/'} />
    </section>
  )
}

export default NotFound;