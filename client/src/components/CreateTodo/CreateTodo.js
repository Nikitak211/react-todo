import { useForm } from 'react-hook-form'
import axios from 'axios'

import './CreateTodo.css'

const CreateTodo = (props) => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const createTodo = async (data) => {
        await axios.post('/todos', data)
            .then(res => {
                const data = res.data;
                props.setSuccess(data.success);
            })
    }

    return (
        <form onSubmit={handleSubmit((data) => {
            const todo = {
                body: data.body,
                title: data.title
            }
            createTodo(todo)
            reset({
                title: "",
                body: ""
            })
        })}>
            <div className="create-todo-container">
                <input type="text" {...register('title', {
                    required: true
                })} />
                <textarea
                    type="text"
                    {...register('body', {
                        required: true
                    })}
                ></textarea>
                <button>create todo</button>
            </div>
        </form>
    );
}

export default CreateTodo;