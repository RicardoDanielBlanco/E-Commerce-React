import { Link } from "react-router-dom";
import styles from './styles.module.css';

type SetCountFunction = (value: number | null) => void;

interface URL {
  URL : string;
  setOpenModal : (i : boolean)=>void;
  id : number;
  setId : SetCountFunction
}

function ButtonsEdDel({URL, setOpenModal, id, setId}:URL){

  function handleOpenModal(){
    setId(id)
    setOpenModal(true)
  }

  return (
    <div className={styles.adminButtons}>
      <Link to={URL}>Edit</Link>
      <button onClick={handleOpenModal}>Delete</button>
    </div>
  )
}

export default ButtonsEdDel;