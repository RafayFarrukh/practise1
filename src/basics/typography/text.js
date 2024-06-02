import React from 'react';
import { Text } from 'react-native';

const TextInput = ({ style, ...props }) => {
  return (
    <Text style={[{}, style]} {...props} />
  );
};

export default TextInput;
