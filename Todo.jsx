
const Todo = ({ todos, onDelete }) => {
    return (
        <div>

            <div>
                {todos.text}
                {todos.completed}
                <button onClick={() => onDelete(todos.id)}
                    className="btn-danger btn-sm btn-m3"
                >Delete</button>
            </div>
            <p>{todos.time}</p>


        </div>
    )
}

export default Todo

