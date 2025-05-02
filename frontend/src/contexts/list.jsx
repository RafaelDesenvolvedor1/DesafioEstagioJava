import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";


export const ListContext = createContext({});

export function ListProvider({ children }) {
  const [lista, setLista] = useState([]);
  const [taskConcludes, setTaskConcludes] = useState(0);

  useEffect(()=> {
    getTasks()
    taskConcluidas()
}, [lista])


  async function addTask(title, desc) {

    try {

      const response = await api.post("/tarefas", {
        titulo: title,
        descricao: desc,
      });

    } catch (err) {
      alert(err);
      console.log("ERRO AO CADASTRAR", err);
    }


  }

  async function getTasks() {
    try {
     const response = await api.get("/tarefas")
        .then(response => JSON.stringify(response.data))
        .then(data => setLista(JSON.parse(data)))
    } catch (err) {
      alert(err);
      console.log("Erro ao buscar os dados");
    }

  }

  function deleteTask(id) {
    const response = api.delete(`/tarefas/${id}`)
  }

 async function checkarTask(id, status) {
   let encontrarPosicao = lista.findIndex((task) => task.id === id);
    let guardarTitulo = lista[encontrarPosicao].titulo
    let guardarDescricao = lista[encontrarPosicao].descricao;

    const response = await api.put(`/tarefas/${id}`,{
        titulo: guardarTitulo,
        descricao: guardarDescricao,
        concluido: status
    })

}

async function editarTask(id, titulo, text) {
    let encontrarPosicao = lista.findIndex((task) => task.id === id);
     let status = lista[encontrarPosicao].concluido
 
     try{
          const response = await api.put(`/tarefas/${id}`,{
         titulo: titulo,
         descricao: text,
         concluido: status
     }) 
     }catch(err){
        alert(err)
        console.log("Não foi possivel editar")
     }
  
 
 }

  function taskConcluidas() {
    setTaskConcludes(lista.filter((task) => task.concluido).length);
  }

  return (
    <ListContext.Provider
      value={{
        lista,
        taskConcludes,

        addTask,
        deleteTask,
        checkarTask,
        editarTask
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
