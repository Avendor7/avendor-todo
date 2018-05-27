import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import logo from './logo.svg';
import './App.scss';
import Todolist from '../Todo/todo-list';
import Reducers from '../Reducers';

const store = createStore(combineReducers(Reducers),composeWithDevTools());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Todolist/>
                </div>
            </Provider>
        );
    }
}

export default App;
