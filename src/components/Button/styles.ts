import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  margin-top: 5%;
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 3px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.poppins_medium};
  color: #fff;
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.text
}))``;
