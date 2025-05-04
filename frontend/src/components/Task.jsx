import React, { useState, useContext, useRef } from "react";
import { ListContext } from "../contexts/list";

//icones
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

//react-confirm
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

export function Task({ id, titulo, text, checked }) {
  const { checkarTask, deleteTask, editarTask } = useContext(ListContext);
  const [checkbox, setCheckbox] = useState(checked);

  const [openEdit, setOpenEdit] = useState(false);

  const editableTitulo = useRef(null);
  const editableText = useRef(null);

  function handleOpenEdit(){
    if(!checked){
      setOpenEdit(!openEdit)
    }else{
      alert("Tarefa marcada como concluida não pode ser editada")
    }
    
  }

  function handleEditTask() {
    if (editableTitulo.current && editableText.current) {
      //alert(editableText.current.textContent);
      editarTask(
        id,
        editableTitulo.current.textContent,
        editableText.current.textContent
      );
    }
  }

  function handleCheckarTarefa(id, status) {
    setCheckbox(!checkbox);

    checkarTask(id, status);
  }

  function handleOpenAlert() {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja deletar essa tarefa?",
      buttons: [
        {
          label: "Sim",
          onClick: () => deleteTask(id),
        },
        {
          label: "Cancelar",
          onClick: () => {},
        },
      ],
    });
  }

  return (
    <div className="task overflow-hidden relative">
      <div
        className={
          checkbox
            ? " min-h-[300px] relative flex flex-col items-start mt-7  p-6 bg-green-600 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            : " min-h-[300px] relative flex flex-col items-start mt-7 p-6  bg-green-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700  "
        }
      >
        <div>
          <span onClick={handleOpenEdit} title="Clique para habilitar a edição da tarefa" className="mt-4 cursor-pointer absolute right-0 top-0 m-3">
            <FaEdit />
          </span>
          <h5
            contentEditable={openEdit}
            ref={editableTitulo}
            className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white bg-transparent border-none  focus:ring-primary focus:border-primary-200 resize-y h-auto break-all mt-3"
          >
            {titulo}
          </h5>
        </div>
        <p
          ref={editableText}
          contentEditable={openEdit}
          className="my-3  w-2xs min-h-[100px] font-normal text-gray-700 dark:text-gray-400 bg-transparent border-none resize-none  focus:ring-primary focus:border-primary-200 break-all "
        >
          {text}
        </p>

        <div className="">
          <div className="inline-flex rounded-md shadow-xs" role="group">
            <button
              type="button"
              className="inline-flex items-center px-8 py-2 text-lg font-medium bg-red-600 text-logo  border border-gray-200 rounded-s-lg hover:bg-primary-200 hover:text-logo focus:z-10 focus:ring-2  dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={handleOpenAlert}
            >
              <MdDelete />
            </button>
            <button
              disabled={!openEdit}
              title="Clique para cadastrar a tarefa editada"
              type="button"
              className="inline-flex items-center px-8 py-2 text-lg font-medium text-logo bg-blue-600 border-t border-b border-gray-200 hover:bg-primary-200 hover:text-logo focus:z-10 focus:ring-2  dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={handleEditTask}
            >
              <MdEdit />
            </button>
            <button
              type="button"
              className="inline-flex items-center px-8 py-2 text-lg font-medium text-logo bg-green-600 border border-gray-200 rounded-e-lg hover:bg-primary-200 hover:text-logo focus:z-10 focus:ring-2  dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              onClick={() => handleCheckarTarefa(id, !checkbox)}
            >
              <FaCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <input
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

 <Modal status={abrirModal} id={id} titulo={titulo} text={text} onClose={() => setAbrirModal(false)}/> */
}
