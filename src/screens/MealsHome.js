/**
 * @flow strict
 */

import * as React from 'react';
import {AppView} from '../components/app-view';
import {Home} from '../components/meals/home';

type IProps = {
  navigate: (url: string) => void,
};

function MealsHome({navigate}: IProps): React.Node {
  return (
    <AppView title={'Explore'}>
      <Home navigate={navigate} />
    </AppView>
  );
}

export default MealsHome;
