import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Flag from 'react-native-flags';

const ImageButton = ({ onPress, code, buttonStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Flag code={code} size={32} />
    </TouchableOpacity>
  );
};

ImageButton.propTypes = {};

export default ImageButton;
