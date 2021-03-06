import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { LanguageContext } from '../providers/LanguageProvider';
import I18n from 'react-native-i18n';
import Loader from "./Loader";

class AppView extends React.Component {
  render() {
    const { children, isLoading } = this.props;
    return (
      <View style={{ margin: 10 }}>
        {isLoading ? (
          <Loader  />
        ) : (
          <React.Fragment>
            <LanguageContext.Consumer>
              {context => {
                I18n.locale = context.language;
                return React.Children.map(children, child =>
                  React.cloneElement(child)
                );
              }}
            </LanguageContext.Consumer>
          </React.Fragment>
        )}
      </View>
    );
  }
}

AppView.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool
};

export default AppView;
