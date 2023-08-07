import styles from '../Login/styles.module.css'
import ButtonLink from '../../components/buttonLink'


export default function SuccessfulPurchase(){

  return (
    <div className={styles.loginBox}>
      <h4>Successful purchase</h4>
      <p>Thank you for shopping with us, we look forward to seeing you again.</p>
      <ButtonLink text={'Return home'} route={'/'} />
    </div>
  )
}