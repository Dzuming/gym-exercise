/**
 * @flow strict
 */

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';

function Gym(): React.Node {
  return (
    <AppView title={'Gym'}>
      <Text>Gym</Text>
    </AppView>
  );
}

export default Gym;
