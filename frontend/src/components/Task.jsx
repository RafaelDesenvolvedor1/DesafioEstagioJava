import React, { useState, useContext } from "react";
import Modal from "./Modal";
import { ListContext } from "../contexts/list";

//icones
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


export function Task({ id, titulo, text, checked }) {
  const { checkarTask, deleteTask } = useContext(ListContext);
  const [checkbox, setCheckbox] = useState(checked);

  const [abrirModal, setAbrirModal] = useState(false);

  function handleCheckarTarefa(id, status) {
    setCheckbox(!checkbox);

    checkarTask(id, status);
  }

  function handleAbrirModal() {
    setAbrirModal(true);
    // alert('hh')
  }

  return (
    <div className="task overflow-hidden">
      <div class="min-w-sm min-h-[300px] relative flex flex-col items-start mt-7 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
            {titulo}
          </h5>
        </a>
        <p class="my-3 w-2xs break-all font-normal text-gray-700 dark:text-gray-400">{text}</p>
        <div className="absolute bottom-0 mb-3">
          <div class="inline-flex rounded-md shadow-xs" role="group">
            <button
              type="button"
              class="inline-flex items-center px-8 py-2 text-lg font-medium bg-red-600 text-logo  border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <MdDelete />
            </button>
            <button
              type="button"
              class="inline-flex items-center px-8 py-2 text-lg font-medium text-logo bg-blue-600 border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
                <MdEdit />

            </button>
            <button
              type="button"
              class="inline-flex items-center px-8 py-2 text-lg font-medium text-logo bg-green-600 border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
