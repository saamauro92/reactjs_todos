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
            {todos && todos.map((todo, indx) =>
                <div key={indx}
                    className={todo.isComplete ? 'row-complete' : 'todo-row'}>

                    <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.todo}  </div>

                    <button onClick={() => removeTodo(todo.id)}>  Delete</button>

                    <button onClick={() => setEdit({ id: todo.id, value: todo.todo })}>  Edit</button>


                </div>
            )

            }
        </>
    )
}


export default Todo;