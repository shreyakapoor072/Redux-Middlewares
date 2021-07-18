import React, { useState } from 'react';
import  { connect } from 'react-redux';
import { addTodo } from '../../thunk';
import { getTodos } from '../../selectors';
import styled from 'styled-components';

const TodoForm = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`

const TodoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`
const TodoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`


const NewTodoForm = ({ todos, onAddButtonPressed }) => {
    const [inputValue, updateInputValue] = useState('');
    const handleInputChange = (e) => {
        updateInputValue(e.target.value);
    }

    const addTodo = () => {
        const isDuplicate = todos.some((todo) => todo.text === inputValue );
        if(inputValue || !isDuplicate ) {
            onAddButtonPressed(inputValue); 
            updateInputValue('');
        } else {
            updateInputValue('');
        }
    }

    return <TodoForm>
         <TodoInput type="text" value={inputValue} className="new-todo-input" onChange={handleInputChange} />
         <TodoButton className="new-todo-button" onClick={addTodo}>Add Todo</TodoButton>
    </TodoForm>
}

const mapStateToProps = state => ({
    todos: getTodos(state)
})

const mapDispatchToProps = dispatch => ({
    onAddButtonPressed: (text) => dispatch(addTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);