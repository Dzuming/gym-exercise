// @flow
import React from 'react';
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

// const enhance: any = withObservables(['post'], ({post}) => ({
//   post: post,
// }));

export default Timer;
