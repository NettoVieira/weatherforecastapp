import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;
  padding: 28px 16px;
  
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const IconClose = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.poppins_medium};
`;
