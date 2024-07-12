/* eslint-disable no-unused-vars */
import './Todo.scss';
import { useState } from 'react';

function Todo()
{

    const initialTodos = [
        { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
        { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
        { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
    ];
    
    const [todos, setTodos] = useState(initialTodos);

    const deleteHandler = (id) => {
        if(confirm('Are you sure you want to delete the to-do?')){
            setTodos(todos.filter(todo => todo.id !== id));
        }
    }

    const isDoneHandler = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id){
                todo.isDone = !todo.isDone
                return todo;
            } else {
                return todo;
            }
        }))
    }

    return (
        <>
            {todos.map(todo => 
                <div className={`todo ${todo.isDone ? 'done' : ''}`} key={todo.id}>
                    <button className="erase" onClick={() => deleteHandler(todo.id)}>x erase</button>
                    <h3>
                        {todo.title}
                    </h3>
                    <p>
                        {todo.description}
                    </p>
                    <div className="task-check">
                        <input type="checkbox" defaultChecked={todo.isDone} onClick={() => isDoneHandler(todo.id)}/>
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