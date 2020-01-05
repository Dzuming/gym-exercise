/**
 * @flow strict
 */

import styled from 'styled-components/native';
import {tango, white} from '../../../../constants/colors';

export const StyledButton: React$ComponentType<{...}> = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${tango};
  position: absolute;
  bottom: 20px;
  right: 10px;
`;

export const StyledText: React$ComponentType<{...}> = styled.Text`
  color: ${white};
  font-size: 20px;
`;
