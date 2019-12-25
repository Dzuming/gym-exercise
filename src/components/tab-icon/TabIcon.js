/**
 * @flow strict
 */

import * as React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type IProps = {
  name: string,
  color: string,
};

function TabIcon({name, color}: IProps): React.Node {
  return <MaterialIcons size={32} name={name} color={color} />;
}

export default (React.memo<IProps>(TabIcon): React.AbstractComponent<IProps>);
