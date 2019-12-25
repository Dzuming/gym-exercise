/**
 * @flow strict
 */

import * as React from 'react';
import {TextInput as TextInputRn} from 'react-native';

type IProps = {
  value: string,
  onChangeText: () => void,
};

function TextInput({value, onChangeText}: IProps): React.Node {
  return <TextInputRn value={value} onChanegText={onChangeText} />;
}

export default (React.memo<IProps>(TextInput): React.AbstractComponent<IProps>);
