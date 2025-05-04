import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const ListContext = createContext({});

export function ListProvider({ children }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  async function addTask(titleParam, descriptionParam) {
    const saveTask = api.post("", {
      title: titleParam,
      description: descriptionParam,
    });

    toast.promise(saveTask, {
      pending: "Salvando tarefa...",
      success: "Tarefa salva com sucesso!",
      error: "Erro ao cadastrar a tarefa",
    });

    try {
      const response = await saveTask;
      await getTasks();
      return response;
    } catch (err) {
      console.log("ERRO AO CADASTRAR", err);
    }
  }

  async function getTasks() {
    const get = api
      .get("")
      .then((response) => JSON.stringify(response.data))
      .then((data) => setList(JSON.parse(data)));

    try {
      const response = await get;
      return response;
    } catch (err) {
      console.log("Erro ao buscar os dados");
    }
  }

  async function removeTask(id) {
    const deletTask = api.delete(`/${id}`);

    toast.promise(deletTask, {
      pending: "Excluindo tarefa...",
      success: "Tarefa Excluida com sucesso!",
      error: "Erro ao excluir a tarefa!",
    });

    try {
      await deletTask;
      await getTasks();
    } catch (err) {
      console.log(err);
    }
  }

  async function checkTask(id, statusParam) {
    let findPosition = list.findIndex((task) => task.id === id);
    let saveTitle = list[findPosition].title;
    let saveDescription = list[findPosition].description;

    try {
      const response = await api.put(`/${id}`, {
        title: saveTitle,
        description: saveDescription,
        status: statusParam,
      });

      await getTasks();
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async function editTask(id, title, text) {
    let findPosition = list.findIndex((task) => task.id === id);
    let saveStatus = list[findPosition].status;

    const saveUpdate = api.put(`/${id}`, {
      title: title,
      description: text,
      status: saveStatus,
    });

    toast.promise(saveUpdate, {
      pending: "Salvando Alteração...",
      success: "Alteração salva com sucesso!",
      error: "Erro ao salvar Alteração.",
    });

    try {
      const response = await saveUpdate;

      await getTasks();
      return response;
    } catch (err) {
      console.log("Erro na promisse");
    }
  }

  return (
    <ListContext.Provider
      value={{
        list,

        addTask,
        removeTask,
        checkTask,
        editTask,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
