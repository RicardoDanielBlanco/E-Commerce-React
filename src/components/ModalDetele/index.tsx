import axios from 'axios';
import styles from './styles.module.css';
import { useMutation } from 'react-query';

interface PropsDetele{
  URL : string,
  id : number | null,
  setOpenModal : (i : boolean)=>void;
  afterDelete: () => void;
}

function ModalDetele({ setOpenModal, URL, id, afterDelete } : PropsDetele){
  const deleteItems = useMutation(()=>{
      return axios.delete(`${URL}${id}`)
    },{
      onSuccess(){
          console.log('Producto eliminado con éxito')
          afterDelete()
          }
    })

  function handleDelete(){
    deleteItems.mutate()
    onClose();
  }

  function onClose(){
    setOpenModal(false)
  }

  return (
    <div className={styles.ModalDelete}>
      <p>Are you sure you want to delete this item?</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  )
}

export default ModalDetele;