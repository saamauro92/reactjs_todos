import { useState } from "react";
import List from "./List";

const Form = () => {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    const addToDo = todo => {
        const newTodoArry = [...todos, todo]

        setTodos(newTodoArry);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.length < 1) { return; }
        addToDo({ id: Math.floor(Math.random() * 100000), todo: input });

        setInput("");
    }

    const onChangeInput = (e) => {
        setInput(e.target.value);
    }


    const removeTodo = (id) => {
        const newArr = [...todos].filter(todo => todo.id !== id)
        setTodos(newArr);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="input" value={input} onChange={onChangeInput} />
                <button type="submit" className={input ? "" : "button-disabled"} disabled={!input}>Add To do </button>
            </form>



            <List todos={todos} removeTodo={removeTodo} />
        </>
    )
}

export default Form;