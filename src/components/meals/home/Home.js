/**
 * @flow strict
 */

import * as React from 'react';
import Button from './Button';

type IProps = {
  navigate: (url: string) => void,
};

function Home({navigate}: IProps): React.Node {
  return (
    <>
      <Button
        text={'Products'}
        icon={'list'}
        navigate={navigate}
        redirectUrl={'Products'}
      />
    </>
  );
}

export default (React.memo<IProps>(Home): React.AbstractComponent<IProps>);
