import { Outlet } from "react-router-dom";
import { NavCartLog, NavOptions } from "../NavBar";
import styles from './styles.module.css'
import {AuthContext} from "../../Context/AuthContext";
import { useContext } from "react";


export function Layout(){
  const authContext = useContext(AuthContext);
  const user = authContext.user

  return (
    <>
    <header>
      <div className={styles.conteiner}>
        <NavOptions />
        <NavCartLog user={user} />
      </div>
    </header>
    <Outlet />
    </>
  )
}