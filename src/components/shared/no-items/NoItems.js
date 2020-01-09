/**
 * @flow strict
 */

import * as React from 'react';
import {StyledRoot, StyledText} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type IProps = {
  text: string,
};

function NoItems({text}: IProps): React.Node {
  return (
    <StyledRoot>
      <MaterialIcons size={48} name={'list'} />
      <StyledText>{text}</StyledText>
    </StyledRoot>
  );
}

export default (React.memo<IProps>(NoItems): React.AbstractComponent<IProps>);
