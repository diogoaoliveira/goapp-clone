import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import HeaderNotification from '../components/HeaderNotification';
import Menu from '../components/Menu';

class HomeView extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    return (
      <LinearGradient colors={['#FB8C0A', '#FF5D01']} style={{ flex: 1 }}>
        <HeaderNotification />
        <Menu navigation={navigation} />
      </LinearGradient>
    );
  }
}

export default HomeView;
