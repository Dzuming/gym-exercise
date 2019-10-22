// @flow

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';

interface IProps {}

const Timer: React$StatelessFunctionalComponent<IProps> = (): React$Element<any> => {
  return (
    <AppView>
      <Text>Timer</Text>
    </AppView>
  );
};

export default Timer;
