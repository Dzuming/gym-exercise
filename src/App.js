/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Screens from './Screens';
import Internalization from './shared/Internalization';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Internalization>
        <Screens />
      </Internalization>
    );
  }
}
