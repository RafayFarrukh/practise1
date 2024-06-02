import React from 'react';
import { TextInput } from 'react-native';

const TextInput= ({ style, ...props }) => {
  const defaultStyle = { height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginVertical: 5 };
  return (
    <TextInput
      style={[defaultStyle, style]}
      {...props}
    />
  );
};

export default TextInput;
