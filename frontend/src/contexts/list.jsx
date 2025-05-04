import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const ListContext = createContext({});

export function ListProvider({ children }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  async function addTask(title, desc) {
    const saveTask = api.post("/tarefas", {
      titulo: title,
      descricao: desc,
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
      .get("/tarefas")
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
    const deletTask = api.delete(`/tarefas/${id}`);

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

  async function checkTask(id, status) {
    let findPosition = list.findIndex((task) => task.id === id);
    let saveTitle = list[findPosition].titulo;
    let saveDescription = list[findPosition].descricao;

    const response = await api.put(`/tarefas/${id}`, {
      titulo: saveTitle,
      descricao: saveDescription,
      concluido: status,
    });

    try {
      const response = api.put(`/tarefas/${id}`, {
        titulo: saveTitle,
        descricao: saveDescription,
        concluido: status,
      });

      await getTasks();
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async function editTask(id, title, text) {
    let findPosition = list.findIndex((task) => task.id === id);
    let status = list[findPosition].concluido;

    const saveUpdate = api.put(`/tarefas/${id}`, {
      titulo: title,
      descricao: text,
      concluido: status,
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
