/**
 * @flow strict
 */

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';

function Settings(): React.Node {
  return (
    <AppView title={'Settings'}>
      <Text>Settings</Text>
    </AppView>
  );
}

export default Settings;
