import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";


export const ListContext = createContext({});

export function ListProvider({ children }) {
  const [lista, setLista] = useState([]);
  

  useEffect(()=> {
    getTasks()
    
}, [lista])


  async function addTask(title, desc) {

    const salvarTarefa = api.post("/tarefas", {
      titulo: title,
      descricao: desc,
    });

    toast.promise(salvarTarefa, {
      pending:"Salvando tarefa...",
      success: "Tarefa salva com sucesso!",
      error: "Erro ao cadastrar a tarefa"
    })

    try {

      const response = await salvarTarefa
      return response

    } catch (err) {
      //alert(err);
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
    const deletTask = api.delete(`/tarefas/${id}`)

    toast.promise(deletTask, {
      pending:"Excluindo tarefa...",
      success: "Tarefa Excluida com sucesso!",
      error: "Erro ao excluir a tarefa!"
    })
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

     const saveUpdate = api.put(`/tarefas/${id}`,{
      titulo: titulo,
      descricao: text,
      concluido: status

     })

     toast.promise(saveUpdate, {
      pending: "Salvando Alteração...",
      success: "Alteração salva com sucesso!",
      error: "Erro ao salvar Alteração."
     })


 
     try{
          const response = await saveUpdate

          return response
     }catch(err){

       console.log("Erro na promisse")

     }
  
 
 }



  return (
    <ListContext.Provider
      value={{
        lista,
     

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
