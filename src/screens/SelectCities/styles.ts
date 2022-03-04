import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ContentButton = styled.View`
  position: absolute;
  margin-top: ${RFPercentage(9)}px;
  width: 100%;
  padding: 28px 16px;
`;

export const SelectStatesButton = styled.TouchableOpacity``
