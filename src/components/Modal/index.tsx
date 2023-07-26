import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
}

export function Modal(props : ModalProps){
  const modalRoot = document.getElementById("modal");

  return (
    modalRoot
    ? ReactDOM.createPortal(props.children, modalRoot)
    : null
    );
}

// Funcíon que se encarga de renderizar el children que recibe fuera del arbol de nodos root