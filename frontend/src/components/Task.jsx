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
import { toast } from "react-toastify";

export function Task({ id, title, text, checked }) {
  const { checkTask, removeTask, editTask } = useContext(ListContext);

  const [checkbox, setCheckbox] = useState(checked);

  const [openEdit, setOpenEdit] = useState(false);

  const editableTitle = useRef(null);
  const editableText = useRef(null);

  function handleOpenEdit() {
    if (!checked) {
      setOpenEdit(!openEdit);
    } else {
      toast.warning("Tarefa marcada como concluida não pode ser editada")
    }
  }

  function handleEditTask() {
    if (editableTitle.current && editableText.current) {
      editTask(
        id,
        editableTitle.current.textContent,
        editableText.current.textContent
      );

      setOpenEdit(!openEdit);
    }
  }
  function handleCheckTask(id, status) {
    setCheckbox(!checkbox);

    checkTask(id, status);
  }

  function handleOpenAlert() {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza que deseja deletar essa tarefa?",
      buttons: [
        {
          label: "Sim",
          onClick: () => removeTask(id),
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
            ? " min-h-[300px] relative flex flex-col items-start mt-7  p-6 bg-green-600 border border-gray-200 rounded-lg shadow-sm "
            : " min-h-[300px] relative flex flex-col items-start mt-7 p-6  bg-white border border-gray-200 rounded-lg shadow-sm "
        }
      >
        <div>
          <span
            onClick={handleOpenEdit}
            title="Clique para habilitar a edição da tarefa"
            className="mt-4 cursor-pointer absolute right-0 top-0 m-3"
          >
            <FaEdit />
          </span>
          <h5
            contentEditable={openEdit}
            ref={editableTitle}
            className="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 bg-transparent border-none  focus:ring-primary focus:border-primary-200 h-auto break-words mt-3 w-[300px]"
          >
            {title}
          </h5>
        </div>
        <p
          ref={editableText}
          contentEditable={openEdit}
          className="my-3  w-2xs min-h-[100px] font-normal text-gray-700 dark:text-gray-400 bg-transparent border-none resize-none  focus:ring-primary focus:border-primary-200 break-words "
        >
          {text}
        </p>

        <div className="">
          <div className="inline-flex rounded-md shadow-xs" role="group">
            <button
              disabled={openEdit}
              type="button"
              className="inline-flex items-center px-8 py-2 text-lg font-medium bg-red-600 text-logo  border border-gray-200 rounded-s-lg hover:bg-primary-200 hover:text-logo focus:z-10 focus:ring-2 "
              onClick={handleOpenAlert}
            >
              <MdDelete />
            </button>
            <button
              disabled={!openEdit}
              title="Clique para cadastrar a tarefa editada"
              type="button"
              className="inline-flex items-center px-8 py-2 text-lg font-medium text-logo bg-blue-600 border-t border-b border-gray-200 hover:bg-primary-200 hover:text-logo focus:z-10 focus:ring-2 "
              onClick={handleEditTask}
            >
              <MdEdit />
            </button>
            <button
              disabled={openEdit}
              type="button"
              className="inline-flex items-center px-8 py-2 text-lg font-medium text-logo bg-green-600 border border-gray-200 rounded-e-lg hover:bg-primary-200 hover:text-logo focus:z-10 focus:ring-2 "
              onClick={() => handleCheckTask(id, !checkbox)}
            >
              <FaCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

