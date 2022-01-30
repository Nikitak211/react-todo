import { useEffect, useRef, useState } from "react";
import axios from "axios";

import './Todos.css'
const Todos = (props) => {
    const ref = useRef()
    const [height, setHeight] = useState()
    const removeTodo = async () => {
        props.setSuccess(true)
        await axios.delete(`/todos/${props.todo.id}`)
    }

    useEffect(() => {
        setHeight(ref.current.scrollHeight)
    }, [])

    return (
        <div className="todos">
            <div className="checkbox"><h4>{props.todo.title}</h4> <input type="checkbox" onChange={() => removeTodo()}></input></div>
            <textarea style={{ height: Math.round(height) + "px" }} ref={ref} disabled defaultValue={props.todo.body}></textarea>
        </div>
    );
}

export default Todos;