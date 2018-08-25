import React, { Component } from "react";
import I18n from "react-native-i18n";
import { Text } from "react-native";

export const LanguageContext = React.createContext();

class LanguageProvider extends Component {
  state = {
    language: this.props.language,
    setLanguage: language => this.setState({ language }),
    showLoader: () => this.setState({ loading: true }),
    hideLoader: () => this.setState({ loading: false }),
    loading: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.language !== this.state.language) {
      I18n.locale = this.state.language;
      setTimeout(this.state.hideLoader, 1000);
    }
  }

  render() {
    console.log(this.state.loading);
    return (
      <LanguageContext.Provider value={this.state}>
        {this.state.loading ? <Text>loading...</Text> : this.props.children}
      </LanguageContext.Provider>
    );
  }
}

LanguageProvider.propTypes = {};

export default LanguageProvider;
