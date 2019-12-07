/**
 * @flow strict
 */

import React, {StatelessFunctionalComponent} from 'react';
import {AppView} from '../components/app-view';
import {Home} from '../components/meals/home';

interface IProps {
  navigate: any;
}
const MealsHome: StatelessFunctionalComponent<IProps> = ({
  navigate,
}): React$Element => {
  return (
    <AppView title={'Explore'}>
      <Home navigate={navigate} />
    </AppView>
  );
};

export default MealsHome;
