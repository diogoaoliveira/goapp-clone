import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

class HomeView extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#e67e22' }}>
        <View style={{ marginLeft: 10, marginRight: 20, marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 36, marginVertical: 15, color: 'white' }}>
              Deixe o App com sua cara.
            </Text>
            <Text style={{ marginBottom: 10, color: 'white' }}>
              Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.
            </Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Button
              style={{ marginRight: 10 }}
              title="Fazer Login"
              onPress={() => navigation.push('Login')}
            />
            <Button
              title="Adicionar"
              onPress={() => navigation.push('Viagens')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeView;
