import styled from 'styled-components';
import {jade, white} from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const StyledButton = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${jade};
  padding: 8px;
`;

export const StyledText = styled.Text`
  font-size: 20px;
  color: ${white};
  padding-bottom: 4px;
`;
