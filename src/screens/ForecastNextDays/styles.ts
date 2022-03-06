import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { ForecastDaily } from './index';

interface ListItemProps extends FlatListProps<ForecastDaily>{}

export const Container = styled.View`
  flex: 1;
`;

export const ItemsList = styled(FlatList as new () => FlatList<ForecastDaily>)<ListItemProps>`
  padding: 0 16px;
  margin-top: 8px;
`;