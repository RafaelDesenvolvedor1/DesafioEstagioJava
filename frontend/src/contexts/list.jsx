import React, { createContext, useState } from "react";
import api from "../services/api";

export const ListContext=createContext({})

export function ListProvider({children}){
    const [lista, setLista]=useState([])
    const [taskConcludes, setTaskConcludes]=useState(0)


  async function addTask(title,desc){
        // let task= {
        //             id:Math.random(),
        //             text:text,
        //             checked: false
        //         }

        // setLista([...lista, task])

        try{
           const response = await api.post('/tarefas', {
            titulo: title,
            descricao: desc
           }) 
        }catch(err){
            alert(err)
            console.log("ERRO AO CADASTRAR", err)
        }

    }

    function deleteTask(id){
        let novaLista = lista.filter(task=>task.id!==id)

        taskConcluidas(novaLista)
        setLista(novaLista)


    }

    function checkarTask(id, status){
        let guardarPosicao=lista.findIndex(task=>task.id===id)

        let novaLista=lista

        novaLista[guardarPosicao].checked=status

        setLista(novaLista)

        console.log(lista.filter(task=>task.checked).length)

        taskConcluidas(lista)
    }

    function taskConcluidas(lista){
        setTaskConcludes(lista.filter(task=>task.checked).length)
    }

 


    return(
        <ListContext.Provider value={{
            lista,
            taskConcludes,
            
            addTask,
            deleteTask,
            checkarTask
        }}>
            {children}
        </ListContext.Provider>
    )
}