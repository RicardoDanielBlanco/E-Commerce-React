import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../../Context/AuthContext";
import styles from '../Login/styles.module.css'
import { useNavigate } from "react-router-dom";


export default function Logout(){
  const authContext = useContext(AuthContext);
  const from = '/';
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  function handleButton(){
    authContext.setUser(null);
    localStorage.removeItem('accessToken');
    authContext.setRole(null);
    localStorage.removeItem('roleProfile');
    setShowMessage(true);
    setTimeout(() => {
      navigate(from, { replace: true });
      }, 3000);    
  }

  useEffect(() => {
    let timer: number;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showMessage]);


  return (
    <div className={styles.loginBox}>
      <h4>Logged out</h4>
      <button onClick={handleButton}>Logout</button>
      {showMessage && <p>Logout successful. Feel free to return anytime.</p>}
    </div>
  )
}