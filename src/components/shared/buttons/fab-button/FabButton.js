/**
 * @flow strict
 */

import * as React from 'react';
import {StyledButton, StyledText} from './styles';

type IProps = {
  action: () => void,
};

function FabButton({action}: IProps): React.Node {
  return (
    <StyledButton onPress={action}>
      <StyledText>+</StyledText>
    </StyledButton>
  );
}

export default (React.memo<IProps>(FabButton): React.AbstractComponent<IProps>);
