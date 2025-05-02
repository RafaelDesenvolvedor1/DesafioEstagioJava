import React, { useState, useContext } from "react";
import Modal from "./Modal";
import { ListContext } from "../contexts/list";

export function Task({ id, titulo, text, checked }) {
  const { checkarTask, deleteTask } = useContext(ListContext);
  const [checkbox, setCheckbox] = useState(checked);

  const [abrirModal, setAbrirModal] = useState(false)

  function handleCheckarTarefa(id, status) {
    setCheckbox(!checkbox);

    checkarTask(id, status);
  }

  function handleAbrirModal(){
    setAbrirModal(true)
  // alert('hh')
  }



  return (
    <li className="task">
      <input
        type="checkbox"
        name=""
        id=""
        checked={checkbox}
        onChange={() => handleCheckarTarefa(id, !checkbox)}
      />
      <p>{titulo}</p>
      <span>{text}</span>
      <button
        className="btn btn-primary"
        onClick = {handleAbrirModal}
        
      >
        Editar
      </button>
      <button onClick={() => deleteTask(id)}>Delete</button>

         <Modal status={abrirModal} id={id} titulo={titulo} text={text} onClose={() => setAbrirModal(false)}/>
    </li>
  );
}
