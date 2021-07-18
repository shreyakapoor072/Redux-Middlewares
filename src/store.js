import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './reducers';

const reducers = {
    todos
};

// state will have an object of key todos (name of reducer) as we are using combine reducers (name of reducer)

const rootReducer = combineReducers(reducers);

// redux chrome extension connect our app to extension
//export const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 export const configureStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // we could have use only compose as well - which is a higher order functions and accepts store enahncers like applymiddleware
