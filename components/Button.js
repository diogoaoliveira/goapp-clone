import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends React.Component {
  render() {
    const { onPress, title, style } = this.props;
    return (
      <TouchableOpacity
        style={[
          {
            backgroundColor: 'white',
            paddingHorizontal: 20,
            paddingVertical: 8,
            marginVertical: 5,
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
          },
          style,
        ]}
        onPress={onPress}
      >
        <Text style={{ color: '#e67e22', fontWeight: '500' }}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
