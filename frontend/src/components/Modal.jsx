import React, { useContext } from "react";
import { useState } from "react";
import { ListContext } from "../contexts/list";



export default function Modal() {
  const { addTask } = useContext(ListContext);
  const [titulo, setTitulo] = useState("");
  const [text, setText] = useState("");
  // const [statusModal, setStatus] = useState(status)

  function handleAddTask(e) {
    e.preventDefault();

    addTask(titulo, text);

    setTitulo("");
    setText("");
  }

  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Criar Tarefa
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#"  onSubmit={handleAddTask}>
                <div>
                  <label
                    for="titulo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Titulo
                  </label>
                  <input
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    type="text"
                    name="titulo"
                    id="titulo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary-200 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Titulo da tarefa..."
                    required
                  />
                </div>
                <div>
                  <label
                    for="descricao"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Descrição
                  </label>
                  <textarea
                    type="text"
                    name="descricao"
                    id="descricao"
                    placeholder="Descrição..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary-200 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    rows={10}
                    cols={50}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-logo bg-primary hover:bg-primary-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary focus:border-primary-200"
                >
                  Criar Tarefa
                </button>
      
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
