import { useState } from 'react';
import Form from './Form';




const Todo = ({ todos, removeTodo, completeTodo, updateTodo }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <Form edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <>
            {todos && todos.map((todo) => <div key={todo.id}>

                <ul>
                    <li>
                        <span onClick={() => completeTodo(todo.id)}>{todo.todo}  </span>   {"            "}

                        <button onClick={() => removeTodo(todo.id)}>  Delete</button>


                        <button onClick={() => setEdit({ id: todo.id, value: todo.todo })}>  Edit</button>
                    </li>
                </ul>

            </div>
            )

            }
        </>
    )
}


export default Todo;