import styled from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({theme}) => theme.colors.shape};
  padding: 16px 16px ;
  border-radius: 5px;
  margin-bottom: 12px;
  justify-content: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NameCity = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.poppins_medium};
  color : ${({theme}) => theme.colors.title};
`;

export const Icon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  color : ${({theme}) => theme.colors.red};
`;

export const Region = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.poppins_medium};
  color : ${({theme}) => theme.colors.title};
`;

export const ContainerTexts = styled.View`
`;

export const Temp = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({theme}) => theme.fonts.poppins_medium};
  color : ${({theme}) => theme.colors.orange};
`;

export const TempMinMax = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.poppins_medium};
  color : ${({theme}) => theme.colors.title};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WeatherDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.poppins_medium};
  color : ${({theme}) => theme.colors.orange};
`;

export const ButtonFavoriteCity = styled.TouchableOpacity`
  
`;