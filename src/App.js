/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Screens from "./Screens";
import Internalization from "./shared/Internalization";
import I18n, { getLanguages } from "react-native-i18n";

type Props = {};
export default class App extends Component<Props> {
  render() {
      I18n.locale = "pl";

      return (
      <Internalization>
        <Screens />
      </Internalization>
    );
  }
}
