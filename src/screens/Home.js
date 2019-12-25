/**
 * @flow strict
 */

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';

type IProps = {};

function Home({}: IProps): React.Node {
  return (
    <AppView title={'Home'}>
      <Text>Home</Text>
    </AppView>
  );
}

export default (React.memo<IProps>(Home): React.AbstractComponent<IProps>);
