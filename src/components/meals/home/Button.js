/**
 * @flow strict
 */

import * as React from 'react';
import {StyledButton, StyledText} from './styles';
import {white} from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

type IProps = {
  text: string,
  icon: string,
  redirectUrl: string,
  navigate: (url: string) => void,
};

function Button({text, icon, navigate, redirectUrl}: IProps): React.Node {
  return (
    <StyledButton onPress={() => navigate(redirectUrl)}>
      <Icon name={icon} size={48} color={white} />
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
}

export default (React.memo<IProps>(Button): React.AbstractComponent<IProps>);
