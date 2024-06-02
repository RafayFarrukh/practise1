import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ style, textStyle, ...props }) => {
  const defaultStyle = { backgroundColor: 'blue', padding: 10, marginVertical: 5 };
  const defaultTextStyle = { color: 'white', textAlign: 'center' };

  return (
    <TouchableOpacity
      style={[defaultStyle, style]}
      {...props}
    >
      <Text style={[defaultTextStyle, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
