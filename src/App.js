import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import TodoList from './components/todoList';

const App = () => {
    return <div className="app">
        <TodoList />
        </div>
}

export default hot(module)(App);