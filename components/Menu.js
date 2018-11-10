import React from 'react';
import { View, FlatList, Text } from 'react-native';

const data = [
  { key: '0', title: 'Minhas viagens', view: 'Viagens' },
  { key: '1', title: 'Comprar', view: 'Comprar' },
  { key: '2', title: 'Minha conta', view: 'MinhaConta' },
];

class Menu extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginVertical: 5,
          marginLeft: 25,
          marginRight: 20,
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text
              style={{
                color: '#ffffff',
                fontWeight: '700',
                marginVertical: 10,
                fontSize: 18,
              }}
              onPress={() => navigation.push(item.view)}
            >
              {item.title}
            </Text>
          )}
        />
      </View>
    );
  }
}

export default Menu;
