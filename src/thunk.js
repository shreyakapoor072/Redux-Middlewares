import { loadTodosFailure, loadTodosInProgress, loadTodosSuccess, createTodo, removeTodo, markTodoComplete } from './actions';


//thunk passes two arguments - dispatch, getState
export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());

        const response =  await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
        
    } catch(e) {
        dispatch(loadTodosFailure());
    }
}

export const addTodo = (text) => async (dispatch) => {
    try {
        const body = JSON.stringify({ text });

        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body
        })

        const result = await response.json();
        dispatch(createTodo(result));
    } catch(e){
        console.warn(e);
    }
    
}

export const deleteTodo = id => async dispatch => {
   try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        })

        const todo = await response.json();
        dispatch(removeTodo(todo));
   } catch(e) {
     console.warn(e);
   }

}

export const updateTodo = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, { 
            method: 'post'
        })

        const updatedTodo = await response.json();
        dispatch(markTodoComplete(updatedTodo));
    } catch(e){
        console.warn(e);
    }
}



