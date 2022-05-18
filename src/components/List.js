
const List = ({ todos, removeTodo }) => {

    return (
        <>
            {todos && todos.map((todo) => <div key={todo.id}>

                <ul>
                    <li>
                        {todo.todo} {"            "}

                        <button onClick={() => removeTodo(todo.id)}>  Delete</button>

                    </li>
                </ul>

            </div>
            )

            }
        </>
    )
}


export default List;