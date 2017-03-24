import React, { Component } from 'react';
import { View} from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, Card, CardSection } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAM_IH1L-Z7PnnOpPEO4gpjWrQdTfQ2FGo',
            authDomain: 'auth-984e8.firebaseapp.com',
            databaseURL: 'https://auth-984e8.firebaseio.com',
            storageBucket: 'auth-984e8.appspot.com',
            messagingSenderId: '369400050331'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={ () => firebase.auth().signOut() }>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size='large' />;
        }
    }


    render() {
        return (
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;



{/*<script src='https://www.gstatic.com/firebasejs/3.7.2/firebase.js'></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAM_IH1L-Z7PnnOpPEO4gpjWrQdTfQ2FGo',
    authDomain: 'auth-984e8.firebaseapp.com',
    databaseURL: 'https://auth-984e8.firebaseio.com',
    storageBucket: 'auth-984e8.appspot.com',
    messagingSenderId: '369400050331'
  };
  firebase.initializeApp(config);
</script>*/}