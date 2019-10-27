// @flow
import React from 'react';
import {AppView} from '../components/app-view';
import {Text} from 'react-native';
import withObservables from '@nozbe/with-observables';
interface IProps {
  post: any;
}
const Timer: React$StatelessFunctionalComponent<IProps> = ({
  post,
}): React$Element<any> => {
  return (
    <AppView>
      <Text>timer</Text>
    </AppView>
  );
};

const enhance: any = withObservables(['post'], ({post}) => ({
  post: post.observe(),
}));

export default enhance(Timer);
