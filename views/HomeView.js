import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeView extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Login" onPress={() => navigation.push('Login')} />
        <Button
          title="Comprar Viagem"
          onPress={() => navigation.push('Comprar')}
        />
        <Button
          title="Minhas Viagens"
          onPress={() => navigation.push('Viagens')}
        />
        <Button
          title="Minha Conta"
          onPress={() => navigation.push('MinhaConta')}
        />
      </View>
    );
  }
}

export default HomeView;
