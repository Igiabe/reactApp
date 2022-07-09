import { useState } from 'react';
import Todo from '../Components/Todo'
import AddTodo from '../Components/AddTodo'

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            text: 'go to work',
            id: 1,
            time: '19th June, 2022',
            status: 'urgent',
            completed: false,
            value: 'important'
        },
        {
            text: 'go to church',
            id: 2,
            time: '19th June, 2022',
            status: 'very urgent',
            completed: false,
            value: 'less impotrtant'
        }
    ])


    const handleSubmit = (todos, onAdd) => {
        const id = Math.floor(Math.random() * 100) + 1

        const newtodo = { id, ...todos }
        setTodos([...todos, newtodo])

    }

    const handleDelete = (id) => {
        setTodos(todos.filter((todos) => todos.id !== id))

    }
    return (

        <div>
            <button className="btn-primary btn-sm btn-m3">
                Add Event</button>
            <AddTodo onSubmit={handleSubmit} onAdd={AddTodo} todos={todos} />

            {todos.map((todos) => (<Todo key={todos
                .id} onDelete={handleDelete} todos={todos}



            />

            ))}
        </div>

    )
}

export default Todos
