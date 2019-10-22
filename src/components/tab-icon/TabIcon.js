// @flow

import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  name:
    | 'home'
    | 'timer'
    | 'local-dining'
    | 'fitness-center'
    | 'settings-input-composite';
  color: string;
}

const TabIcon: React$StatelessFunctionalComponent<IProps> = ({
  name,
  color,
}): React$Element<any> => <Icon size={32} name={name} color={color} />;

export default memo<IProps>(TabIcon);
