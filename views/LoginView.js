import React, {Component} from 'react';
import {View, Text} from 'react-native';

class LoginView extends Component {
    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Login Screen</Text>
            </View>
        )
    }
}

export default LoginView;