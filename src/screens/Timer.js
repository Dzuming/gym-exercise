/**
 * @flow strict
 */

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';

function Timer(): React.Node {
  return (
    <AppView title={'Timer'}>
      <Text>Timer</Text>
    </AppView>
  );
}

// const enhance: any = withObservables(['post'], ({post}) => ({
//   post: post,
// }));

export default Timer;
