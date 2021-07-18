import { createSelector } from 'reselect';

export const getTodosLoading = state => state.todos.isLoading;

export const getTodos = state => state.todos.data;

// we can pass multiple selector in createSelector
export const getIncompleteTodos = createSelector(
    getTodos, // this is argument for function
    (todos) => todos.filter(item => !item.isCompleted) // final function
    // if multiple selector then we will pass multiple arguments to func like this -- (todos, isLoading) => {}
)

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(item => item.isCompleted)
)