// @flow

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';

interface IProps {}

const Meals: React$StatelessFunctionalComponent<IProps> = (): React$Element<any> => {
  return (
    <AppView>
      <Text>Meals</Text>
    </AppView>
  );
};

export default Meals;
