import React, {memo} from 'react';
import {View} from 'react-native';
import Loader from './Loader';

class AppView extends React.Component {
  render() {
    const {children, isLoading} = this.props;
    return (
      <View style={{margin: 10}}>{isLoading ? <Loader /> : children}</View>
    );
  }
}

export default memo(AppView);
