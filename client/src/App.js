import { useState, useEffect } from "react";
import axios from "axios";

import CreateTodo from "./components/CreateTodo/CreateTodo";
import Todos from "./components/Todos/Todos";

import './index.css'

function App() {

  const [todo, setTodo] = useState([])
  const [success, setSuccess] = useState()

  useEffect(() => {
    axios.get('/todos').then(res => {
      const data = res.data;
      setTodo(data.reverse());
      setSuccess()
    })
  }, [success])

  return (
    <div className="todo-app">
      <div>
        <CreateTodo setSuccess={setSuccess} />
      </div>
      <div className="todo">
        {todo.map(todo => {
          return <Todos key={todo.id} setSuccess={setSuccess} todo={todo} />
        })}
      </div>
    </div>
  );
}

export default App;
