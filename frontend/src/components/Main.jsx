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

    function handleAddTask(e) {
        e.preventDefault()

        addTask(inputText)

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