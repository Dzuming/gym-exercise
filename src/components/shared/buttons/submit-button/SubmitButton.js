/**
 * @flow strict
 */

import * as React from 'react';
import {Button} from 'react-native';
import {tango} from '../../../../constants/colors';

type IProps = {
  onPress: () => void,
};

function SubmitButton({onPress}: IProps): React.Node {
  return <Button color={tango} onPress={onPress} title={'Submit'} />;
}

export default (React.memo<IProps>(
  SubmitButton,
): React.AbstractComponent<IProps>);
