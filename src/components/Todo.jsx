/* eslint-disable no-unused-vars */
import './Todo.scss';
import { useContext } from 'react';
import { TodosContext } from '../TodosContext'; 

function Todo()
{

    const state = useContext(TodosContext); // Essa variável vai guardar tudo que está no C ontext

    const deleteHandler = (id) => {
        state.dispatch({ // Pra esse método funcionar precisamos passar algumas informações
            type: 'deleted',
            id: id
        }); // Esse método está dentro do Context
    } // A lógica desta função não está aqui, aqui chama o dispatch e é lá no Reducer que acontece a lógica

    const isDoneHandler = (id) => {
        state.dispatch({
            type: 'toggledIsDone',
            id: id
        })
    }

    return (
        <>
            {state.todos.map(todo => 
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