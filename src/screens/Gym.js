// @flow

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';

interface IProps {}

const Gym: React$StatelessFunctionalComponent<IProps> = (): React$Element<any> => {
  return (
    <AppView title={'Gym'}>
      <Text>Gym</Text>
    </AppView>
  );
};

export default Gym;
