import { CREATE_TODO, 
    MARK_TODO_COMPLETE, 
    REMOVE_TODO,
    LOAD_TODOS_FAILURE, 
    LOAD_TODOS_SUCCESS, 
    LOAD_TODOS_IN_PROGRESS } from './actions';


const initialState = {
    data: [],
    isLoading: false
}
const todos = (state = initialState, action ) => {

    const { type, payload } = action;

    switch(type) {
        case CREATE_TODO: {
           const { todo: newTodo } = payload;
            return {...state, data: [...state.data, newTodo]};
        }

        case REMOVE_TODO: 
            const { todo: deletedTodo } = payload;
            return {...state, data: state.data.filter(todo => todo.id !== deletedTodo.id)}

        case MARK_TODO_COMPLETE: 
        const { todo: updatedTodo } = payload;
        return { ...state, data: state.data.map(todo => {
            if(todo.id === updatedTodo.id) {
                return payload.todo
            }
            return todo;
        })}

        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return {...state, data: todos, isLoading: false}
        }

        case LOAD_TODOS_IN_PROGRESS: 
        return {
            ...state,
            isLoading: true
        }

        case LOAD_TODOS_FAILURE: 
        return {
            ...state,
            isLoading: false
        }

        default: 
            return state
    }
}

export default todos;