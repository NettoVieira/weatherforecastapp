import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.attention_light};
  border-radius: 3px;
  padding: 16px 16px ;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.shape};
`;