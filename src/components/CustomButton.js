import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CustomButton = ({onPress, buttonStyle, textStyle, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {};

export default CustomButton;
