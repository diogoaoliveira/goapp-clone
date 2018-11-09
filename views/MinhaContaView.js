import React, {Component} from 'react';
import {View, Text} from 'react-native';

class MinhaContaView extends Component {
    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Minha conta</Text>
            </View>
        )
    }
}

export default MinhaContaView;