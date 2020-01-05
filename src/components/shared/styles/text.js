/**
 * @flow strict
 */

import styled from 'styled-components/native';
import {guardsmanRed, tarawera} from '../../../constants/colors';

export const StyledText: React$ComponentType<{...}> = styled.Text`
  color: ${tarawera};
`;

export const StyledErrorMessage: React$ComponentType<{...}> = styled.Text`
  color: ${guardsmanRed};
`;
