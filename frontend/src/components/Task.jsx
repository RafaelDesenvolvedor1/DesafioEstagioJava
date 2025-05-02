import React, {useState, useContext} from "react";
import { ListContext } from '../contexts/list'


export function Task({id, text, checked}){
    const { checkarTask, deleteTask,} = useContext(ListContext)
    const [checkbox, setCheckbox] = useState(checked)

    function handleCheckarTarefa(id, status) {
        setCheckbox(!checkbox)

        checkarTask(id, status)
    }

    return(
        <li>
        <input
            type="checkbox"
            name=""
            id=""
            checked={checkbox}
            onChange={()=>handleCheckarTarefa(id, !checkbox)}
        />
        <span>{text}</span>
        <button
            onClick={() => deleteTask(id)}
        >Delete</button>
    </li>
    )
}