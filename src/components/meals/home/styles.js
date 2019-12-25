/**
 * @flow strict
 */

import styled from 'styled-components/native';
import {jade, white} from '../../../constants/colors';

export const StyledButton: React$ComponentType<{...}> = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${jade};
  padding: 8px;
`;

export const StyledText: React$ComponentType<{...}> = styled.Text`
  font-size: 20px;
  color: ${white};
  padding-bottom: 4px;
`;
