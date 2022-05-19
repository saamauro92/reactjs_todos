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
                    className={todo.isComplete ? 'todo-row row-complete' : 'todo-row'}>

                    <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.todo}  </div>

                    <div className="row-controls">
                        <button onClick={() => setEdit({ id: todo.id, value: todo.todo })}>  Edit</button>
                        <button onClick={() => removeTodo(todo.id)}>  Delete</button>
                    </div>




                </div>
            )

            }
        </>
    )
}


export default Todo;