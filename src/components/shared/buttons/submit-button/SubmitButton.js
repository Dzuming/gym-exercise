/**
 * @flow strict
 */

import * as React from 'react';
import {Button} from 'react-native';
import {tango} from '../../../../constants/colors';
import {StyledRoot} from './styles';

type IProps = {
  onPress: () => void,
};

function SubmitButton({onPress}: IProps): React.Node {
  return (
    <StyledRoot>
      <Button color={tango} onPress={onPress} title={'Submit'} />
    </StyledRoot>
  );
}

export default (React.memo<IProps>(SubmitButton): React.AbstractComponent<IProps>);
