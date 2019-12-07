/**
 * @flow strict
 */

import React, {memo} from 'react';
import {StyledButton, StyledText} from './styles';
import {white} from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  text: string;
  icon: string;
  redirectUrl: string;
  navigate: any;
}

const Button: React$StatelessFunctionalComponent<IProps> = ({
  text,
  icon,
  navigate,
  redirectUrl,
}): React$Element => {
  return (
    <StyledButton onPress={() => navigate(redirectUrl)}>
      <Icon name={icon} size={48} color={white} />
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

export default memo(Button);
