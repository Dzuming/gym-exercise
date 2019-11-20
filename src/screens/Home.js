// @flow

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';

interface IProps {}

const Home: React$StatelessFunctionalComponent<IProps> = (): React$Element<any> => {
  return (
    <AppView title={'Home'}>
      <Text>Home</Text>
    </AppView>
  );
};

export default Home;
