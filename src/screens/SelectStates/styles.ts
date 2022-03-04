import styled from 'styled-components/native';
import { FlatList } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatListItem } from './';
import { FontAwesome5 } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ListItem = styled(FlatList as new () => FlatList<FlatListItem>)`
  padding: 0 16px;
`;

export const ContentSelectState = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 12px;
  align-items: center;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const NameState = styled.Text`
  margin-left: 12px;
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.poppins_regular};
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Footer = styled.View`
  padding: 0 16px;
  width: 100%;
`;