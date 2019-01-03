import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/loginForm';
import reducers from './reducers';
import Router from './router'

export default class App extends Component{
   
    componentDidMount(){
        const config = {
            apiKey: "AIzaSyAp_6ioyZVrd98qj_ymyyuO2lmBF7Pri5M",
            authDomain: "twitterklon-5568c.firebaseapp.com",
            databaseURL: "https://twitterklon-5568c.firebaseio.com",
            projectId: "twitterklon-5568c",
            storageBucket: "twitterklon-5568c.appspot.com",
            messagingSenderId: "75523111007"
        };
        firebase.initializeApp(config);
    }
   
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                    <Router></Router>
            </Provider>
        );
    }
}