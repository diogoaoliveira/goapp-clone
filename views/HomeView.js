import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeView extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeView;
