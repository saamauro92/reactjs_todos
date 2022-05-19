import { useState } from 'react';
import Form from './Form';
import Todo from './Todo';




const TodosList = () => {

    const [todos, setTodos] = useState([]);

    const addToDo = todo => {
        const newTodoArry = [...todos, todo]

        setTodos(newTodoArry);
    }




    const updateTodo = (todoId, newValue) => {

        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = (id) => {
        const newArr = [...todos].filter(todo => todo.id !== id)
        setTodos(newArr);
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos)
    }



    return (
        <>

            <Form onSubmit={addToDo} />

            <Todo todos={todos} removeTodo={removeTodo} />

        </>

    )
}


export default TodosList;