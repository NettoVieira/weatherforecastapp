import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { IStates } from './';

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ContentButton = styled.View`
  position: absolute;
  margin-top: ${RFPercentage(9)}px;
  width: 100%;
  padding: 28px 16px;
`;


export const ListItem = styled(FlatList)``;

export const SelectStatesButton = styled.TouchableOpacity``
