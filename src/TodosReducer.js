export default function todosReducer(todos, action) { // Passamos sempre o estado atual da aplicação (o State) e também qual é a ação que queremos realizar

    switch (action.type) {
        case 'deleted': { // A convensão é de usar as ações no passado
            if(confirm('Are you sure you want to delete the to-do?')){
                return todos.filter(todo => todo.id !== action.id);
            }
            break;
        }
        case 'toggledIsDone': {
            return (todos.map(todo => {
                if(todo.id === action.id){
                    todo.isDone = !todo.isDone;
                    return todo;
                } else {
                    return todo;
                }
            }));            
        }
    } 

}

// É assim que o Reducer funciona, recebe o estado atual e retornar um estado novo já modificado