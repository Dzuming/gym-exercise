// @flow

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';

interface IProps {}

const Settings: React$StatelessFunctionalComponent<IProps> = (): React$Element<any> => {
  return (
    <AppView>
      <Text>Settings</Text>
    </AppView>
  );
};

export default Settings;
