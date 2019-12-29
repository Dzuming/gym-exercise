/**
 * @flow strict
 */

import * as React from 'react';
import {Button} from 'react-native';
import {tango} from '../../../../constants/colors';

type IProps = {
  onPress: () => void,
};

function CancelButton({onPress}: IProps): React.Node {
  return <Button color={tango} onPress={onPress} title={'Cancel'} />;
}

export default (React.memo<IProps>(
  CancelButton,
): React.AbstractComponent<IProps>);
