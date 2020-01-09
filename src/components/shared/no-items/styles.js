/**
 * @flow strict
 */

import styled from 'styled-components/native';

export const StyledRoot: React$ComponentType<{...}> = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledText: React$ComponentType<{...}> = styled.Text`
  font-size: 20px;
`;
