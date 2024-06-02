import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Link = ({ style, ...props }) => {
  const defaultStyle = { color: 'blue' };
  return (
    <TouchableOpacity {...props}>
      <Text style={[defaultStyle, style]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Link;
