/**
 * @flow strict
 */

import React, {memo} from 'react';
import Button from './Button';

interface IProps {
  navigate: any;
}

const Home: React$StatelessFunctionalComponent<IProps> = ({
  navigate,
}): React$Element => {
  return (
    <>
      <Button text={'Products'} icon={'list'} navigate={navigate} redirectUrl={'Products'} />
    </>
  );
};

export default memo(Home);
