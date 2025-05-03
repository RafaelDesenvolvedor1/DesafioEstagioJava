import React, { useContext, useState } from "react";

import { ListContext } from "../contexts/list";
import { Task } from "./Task";

//icons
import { MdOutlineAddCircle } from "react-icons/md";
import Modal from "./Modal";

export function Main() {
  const { lista, taskConcludes, addTask } = useContext(ListContext);

  const [inputText, setInputText] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);

  function handleAddTask(e) {
    e.preventDefault();

    addTask(inputTitle, inputText);

    setInputTitle("");
    setInputText("");
  }

  return (
    <div
      id="containerApp"
      className="rounded-t-4xl bg-white mt-[-30px]  min-h-[60dvh] py-4 flex flex-wrap w-full gap-5"
    >
     
        <button
          type="button"
          className="py-2.5 px-5 mt-7 ml-7 font-medium bg-gray-100 text-primary focus:outline-none  rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-primary-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-sm h-[300px] flex justify-center items-center text-8xl"
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          onClick={() => setOpenModal(true)}
        >
          <MdOutlineAddCircle />
        </button>
        {lista.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            text={item.descricao}
            checked={item.concluido}
          />
        ))}
      
      <Modal />
    </div>
  );
}

// <form onSubmit={handleAddTask}>
// <input
//   type="text"
//   placeholder="Titulo"
//   value={inputTitle}
//   onChange={(e) => setInputTitle(e.target.value)}
//   required
// />

// <input
//   type="text"
//   placeholder="Text"
//   value={inputText}
//   onChange={(e) => setInputText(e.target.value)}
//   required
// />

// <button>Add task</button>
// </form>

// <div>
// {taskConcludes} / {lista.length}
// </div>

// <ul>
// {lista.map((item) => (
//   <Task
//     key={item.id}
//     id={item.id}
//     titulo={item.titulo}
//     text={item.descricao}
//     checked={item.concluido}
//   />
// ))}
// </ul>
