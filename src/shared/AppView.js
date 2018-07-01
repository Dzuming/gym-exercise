import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View } from "react-native";

const AppView = ({ children, isLoading }) => {
  return (
    <View style={{ margin: 10 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        children
      )}
    </View>
  );
};

AppView.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool
};

export default AppView;
