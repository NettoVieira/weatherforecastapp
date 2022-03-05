import styled from 'styled-components/native';

import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.shape};
  padding: 16px 16px ;
  border-radius: 5px;
  margin-bottom: 12px;
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

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(16)}px;
  color : ${({theme}) => theme.colors.title};
`;

export const Region = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.poppins_medium};
  color : ${({theme}) => theme.colors.title};
`;

