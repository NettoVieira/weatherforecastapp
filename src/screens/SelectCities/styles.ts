import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList, FlatListProps } from 'react-native';
import { Cities } from '../../interfaces/Cities'

interface ListItemProps extends FlatListProps<Cities>{}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ContentSearchInput = styled.View`
  position: absolute;
  margin-top: ${RFPercentage(9)}px;
  width: 100%;
  padding: 28px 16px;
`;

export const ItemsList = styled(FlatList as new () => FlatList<Cities>)<ListItemProps>`
  padding: 8px 3px 14px 0;
`;

export const SelectStatesButton = styled.TouchableOpacity``

export const Footer = styled(GestureHandlerRootView)`
  padding: 8px 16px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;