import React from 'react';
import { View, Text } from 'react-native';
import { Font } from 'expo';
import Button from './Button';

class HeaderNotification extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      'mairy-light': require('../assets/fonts/Mairy-Light.otf'),
    });

    this.setState({
      fontsLoaded: true,
    });
  }
  render() {
    const { fontsLoaded } = this.state;
    if (fontsLoaded)
      return (
        <View
          style={{
            marginLeft: 10,
            marginRight: 20,
            marginTop: 50,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 52,
                fontWeight: '400',
                marginVertical: 15,
                color: 'white',
                fontFamily: 'mairy-light',
              }}
            >
              Deixe o APP com sua cara.
            </Text>
            <Text style={{ marginBottom: 10, color: 'white' }}>
              Lorem ipsum sit dolor amet.Lorem ipsum sit dolor amet.
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 50,
            }}
          >
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
      );
    return null;
  }
}

export default HeaderNotification;
