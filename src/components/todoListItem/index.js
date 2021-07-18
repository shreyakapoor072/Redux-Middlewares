import React from 'react';
import styled from 'styled-components';


const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`

const ButtonContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`

const TodoButton = styled.div`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`

// extending TodoButton style
const CompleteButton = styled(TodoButton)`
    display: inline-block;
    background-color: #22ee22;
    text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'}; // using props 
`

const RemoveButton = styled(TodoButton)`
    display: inline-block;
    background-color: #ee2222;
    margin-left: 8px;
`



const TodoListItem = ({todo, removeTodo, markTodoComplete}) => {
    const { text, isCompleted, id } = todo;
    return <TodoItemContainer>
        {text}
        <ButtonContainer>
            <CompleteButton isCompleted={isCompleted} className={`${isCompleted ? 'completed-button' : 'not-completed-button'}`} onClick={() => isCompleted ? null : markTodoComplete(id)}>{ isCompleted ? 'Completed' : 'Mark as Completed'}</CompleteButton>
            <RemoveButton className="remove-button" onClick={() => removeTodo(id)}>Remove</RemoveButton>
        </ButtonContainer>
    </TodoItemContainer>
}

export default TodoListItem;