import React, { useContext, useState } from "react";

import { ListContext } from '../contexts/list'
import { Task } from "./Task";


export function Main() {
    const {
        lista,
        taskConcludes,
        addTask,
    } = useContext(ListContext)

    const [inputText, setInputText] = useState('')
    const [inputTitle, setInputTitle] = useState('')

    function handleAddTask(e) {
        e.preventDefault()

        addTask(inputTitle,inputText)

        setInputTitle('')
        setInputText('')

        // console.log(lista)
    }



    // function handleDeleteTask(id){
    //     deleteTask(id)
    // }
    return (
        <div>
            <form onSubmit={handleAddTask}>
            <input
                    type="text"
                    placeholder="Titulo"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />

                <button>Add task</button>
            </form>

            <div>
                {taskConcludes} / {lista.length}
            </div>

            <ul>
                {
                    lista.map(item => (
                        <Task
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            checked={item.checked}
                        />
                    ))
                }
            </ul>
        </div>
    )
}