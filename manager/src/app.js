import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Router from './router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAXUkz3BNydswi2Vo280M80YuEjI_Y-AKQ',
            authDomain: 'manager-6e2c9.firebaseapp.com',
            databaseURL: 'https://manager-6e2c9.firebaseio.com',
            projectId: 'manager-6e2c9',
            storageBucket: 'manager-6e2c9.appspot.com',
            messagingSenderId: '660513294045'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
