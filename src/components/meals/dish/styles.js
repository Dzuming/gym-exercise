import styled from 'styled-components';
import {white, tango} from '../../../constants/colors';
import {StyledText} from '../../shared/styles/text';

export const StyledRoot = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${white};
`;

export const StyledColumn = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

export const StyledRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 65px;
  height: auto;
`;

export const StyledName = styled(StyledText)`
  width: 60%;
  max-width: 250px;
`;

export const StyledFat = styled(StyledText)`
  padding-right: 8px;
`;

export const StyledCarbon = styled(StyledText)`
  padding-right: 8px;
`;

export const StyledKcal = styled(StyledText)`
  font-size: 24px;
  color: ${tango};
`;
