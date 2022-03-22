import styled from 'styled-components/native';
import { BorderlessButton, RectButton, Swipeable } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { FlatList, FlatListProps } from 'react-native';
import { Cities } from '../../interfaces/Cities';

interface ListItemProps extends FlatListProps<Cities>{}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: ${RFPercentage(14)}px;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;



export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const SearchButton = styled(BorderlessButton)``;

export const ItemsList = styled(FlatList as new () => FlatList<Cities>)<ListItemProps>`
  padding: 0 16px;
  margin-top: 8px;
`;

export const SwippleRemove = styled(Swipeable)``;

export const HeaderList = styled.View`
  margin-top: 16px;
  padding: 0 16px;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ManageButton = styled(RectButton)`
  padding: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${RFValue(80)}px;
`;

export const TextManageButton = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.orange};
  font-family: ${({theme}) => theme.fonts.poppins_medium};
`;

export const IconManageButton = styled(FontAwesome5)`
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.orange};
`

export const ContainerEmptyList = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

export const EmptyText = styled.Text`
  margin-top: 16px;
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.poppins_medium};
  text-align: center;
`;