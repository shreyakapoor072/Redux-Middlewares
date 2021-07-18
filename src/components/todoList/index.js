import React, { useEffect } from 'react';
import TodoListItem from '../todoListItem';
import NewTodoForm from '../newTodoForm';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { loadTodos, deleteTodo, updateTodo } from '../../thunk';
import { getCompletedTodos, getIncompleteTodos, getTodosLoading } from '../../selectors';

const TodoContainer = styled.div`
    max-width: 700px;
    margin: auto;
`

const TodoList = ({incompletedTodos = [], completedTodos = [], isLoading, removeButtonPressed, markTodoCompleted, fetchTodos}) => {
   
    useEffect(() => {
        fetchTodos();
    }, []);
   
    return isLoading ? <div>Content Loading</div> : <TodoContainer>
        <NewTodoForm />
        <h3>Incompleted Todos</h3>
        {incompletedTodos && incompletedTodos.map((item) => {
            return <TodoListItem key={item.id} todo={item} removeTodo={removeButtonPressed} markTodoComplete={markTodoCompleted} />
        })}
        <h3>Completed Todos</h3>
        {completedTodos && completedTodos.map((item) => {
            return <TodoListItem key={item.id} todo={item} removeTodo={removeButtonPressed} markTodoComplete={markTodoCompleted} />
        })}
    </TodoContainer>
}

const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompletedTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state)
})

const mapDispatchToProps = dispatch => ({
    fetchTodos: () => dispatch(loadTodos()),
    removeButtonPressed: (id) => dispatch(deleteTodo(id)),
    markTodoCompleted: (id) => dispatch(updateTodo(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);