/**
 * @flow strict
 */

import * as React from 'react';
import {ActivityIndicator} from 'react-native';
import {StyledLoader} from './styes';

function Loader(): React.Node {
  return (
    <StyledLoader>
      <ActivityIndicator size="large" color="#0000ff" />
    </StyledLoader>
  );
}

export default (React.memo<{}>(Loader): React.AbstractComponent<{}>);
