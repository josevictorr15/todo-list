import './Todo.scss';
import { useState } from 'react';

function Todo() {

    const initialTodos = [
        { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
        { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
        { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false },
        { id: 3, title: 'Read a book', description: 'Learn state management with Redux', isDone: false }
    ];

    const [todos, setTodos] = useState(initialTodos);

    const handleChange = (e) => {
        console.log(e);
    }

  return (
    <>

        {todos.map(todo => 
            <div className={`todo ${todo.isDone ? 'done' : ''}`} key={todo.id}>
                <button className="erase">x erase</button>
                <h3>
                    {todo.title}
                </h3>
                <p>
                    {todo.description}
                </p>
                <div className="task-check">
                    <input type="checkbox" checked={todo.isDone} onChange={handleChange} />
                    <label>
                        {!todo.isDone ? 'To-Do' : 'Done'}
                    </label>
                </div>
            </div>
        )}
    </>
  )
}

export default Todo