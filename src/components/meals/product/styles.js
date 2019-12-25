/**
 * @flow strict
 */

import styled from 'styled-components/native';
import {tango, white} from '../../../constants/colors';
import {StyledText} from '../../shared/styles/text';

export const StyledRoot: React$ComponentType<{...}> = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${white};
`;

export const StyledColumn: React$ComponentType<{...}> = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const StyledRow: React$ComponentType<{...}> = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImage: React$ComponentType<{...}> = styled.Image`
  width: 65px;
  height: auto;
`;

export const StyledName: React$ComponentType<{...}> = styled(StyledText)`
  width: 60%;
  max-width: 250px;
`;

export const StyledFat: React$ComponentType<{...}> = styled(StyledText)`
  padding-right: 8px;
`;

export const StyledCarbon: React$ComponentType<{...}> = styled(StyledText)`
  padding-right: 8px;
`;

export const StyledKcal: React$ComponentType<{...}> = styled(StyledText)`
  font-size: 24px;
  color: ${tango};
`;
