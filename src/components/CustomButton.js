import React from "react";
import PropTypes from "prop-types";
import {Text, TouchableOpacity, View} from "react-native";

const CustomButton = ({ key, onPress, buttonStyle, textStyle, title }) => {
  return (
      <TouchableOpacity key={key} onPress={onPress} style={buttonStyle}>
          <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
  );
};

CustomButton.propTypes = {};

export default CustomButton;
